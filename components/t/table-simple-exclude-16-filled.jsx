import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mjdihcqsl {
  fill: currentColor;
  d: path("M3.5 1H6v5H1V3.5A2.5 2.5 0 0 1 3.5 1M1 9.5V7h5v5H3.5A2.5 2.5 0 0 1 1 9.5M12 6V3.5A2.5 2.5 0 0 0 9.5 1H7v5zm-1.75 2.5a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15 13.25v-3a1.75 1.75 0 0 0-1.75-1.75z");
}
</style><path class="mjdihcqsl"/>`,
		"fallback": "fluent:table-simple-exclude-16-filled",
	});
}

export default Component;
