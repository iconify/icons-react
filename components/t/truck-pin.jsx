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
		"content": `<style>.c404t1u9v {
  cx: 17px;
  cy: 19.25px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pmlr-rd6a {
  d: path("M2.75 6.25a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v2h3.15a1.5 1.5 0 0 1 1.25.67L21 11.7a1 1 0 0 1 .25.66V14a1 1 0 0 1-1 1h-16a1.5 1.5 0 0 1-1.5-1.5Zm12 2V15");
}

.w0wkfousa {
  cx: 7.25px;
  cy: 19.25px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="pmlr-rd6a"/><circle class="w0wkfousa"/><circle class="c404t1u9v"/></g>`,
		"fallback": "iconoven:truck-pin",
	});
}

export default Component;
