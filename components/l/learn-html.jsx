import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e712uubjt {
  d: path("M30.7 23.7H17.3l.5 7.3h12.6l-.6 7.9l-5.8 1.6l-5.7-1.6l-.2-3.3");
}

.g1zhw3tqy {
  stroke-miterlimit: 10;
  d: path("M36.4 7.5v9.9h5m-17.1-.1V7.5l4.9 9.9l4.9-9.9v9.9M15.5 7.5H22m-3.3 9.9V7.5m-12.1 0v9.9m6.6-9.9v9.9m-6.6-5h6.6");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="e712uubjt"/><path class="g1zhw3tqy"/></g>`,
		"fallback": "arcticons:learn-html",
	});
}

export default Component;
