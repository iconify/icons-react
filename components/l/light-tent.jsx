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
		"content": `<style>.gqhioybxo {
  d: path("M7 15a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1aoo2bhv {
  d: path("M3 7.5h13v13H3Zm0 0L7.5 3h13v13L16 20.5m0-13L20.5 3");
}
</style><g class="hntgybcog"><path class="l1aoo2bhv"/><path class="gqhioybxo"/></g>`,
		"fallback": "uix:light-tent",
	});
}

export default Component;
