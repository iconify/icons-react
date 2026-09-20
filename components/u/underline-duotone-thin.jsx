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
		"content": `<style>.fha5-ubus {
  fill: currentColor;
  d: path("M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.qnt_uubje {
  d: path("M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="fha5-ubus"/><path class="qnt_uubje"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:underline-duotone-thin",
	});
}

export default Component;
