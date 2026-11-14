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
		"content": `<style>.cjl21zbpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 19.5l16-16m-6.061 12.561l2.5-2.5a1.5 1.5 0 0 1 2.122 0l2.5 2.5a1.5 1.5 0 0 1 .439 1.06V20a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 13 20v-2.879a1.5 1.5 0 0 1 .439-1.06M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h5m-1.5 0v2M12 5v2");
}
</style><path class="cjl21zbpr"/>`,
		"fallback": "uix:rent-vs-buy",
	});
}

export default Component;
