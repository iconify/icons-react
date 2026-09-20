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
		"content": `<style>.nmv9xqbnr {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h10l6 6v10q0 .825-.587 1.413T19 21zm2-4h10v-2H7zm0-4h10v-2H7zm0-4h7V7H7z");
}
</style><path class="nmv9xqbnr"/>`,
		"fallback": "material-symbols:text-snippet",
	});
}

export default Component;
