import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lodb0-m3w {
  fill: currentColor;
  d: path("M12.5 16.5h1v-9h-3v1h2zM20 20H4V4h16z");
}
</style><path class="lodb0-m3w"/>`,
		"fallback": "material-symbols-light:looks-one-sharp",
	});
}

export default Component;
