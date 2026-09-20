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
		"content": `<style>.bhd8q83uz {
  fill: currentColor;
  d: path("M3 21L21 3v10.73h-6.884V21zm16.5 0v-4.884h1V21zm-3 0v-4.884h1V21z");
}
</style><path class="bhd8q83uz"/>`,
		"fallback": "material-symbols-light:signal-cellular-pause-sharp",
	});
}

export default Component;
