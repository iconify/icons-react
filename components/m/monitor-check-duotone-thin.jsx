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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.m7p35uguv {
  d: path("M12 17v3");
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.t5v_djbzx {
  fill: currentColor;
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xncmae_bi {
  d: path("m9 10.5 2 2 4 -4");
}
</style><g class="hntgybcog"><path class="t5v_djbzx"/><path class="jq9hovbrs"/><path class="m7p35uguv"/><path class="qdn88l2uv"/><path class="xncmae_bi"/></g>`,
		"fallback": "iconmind:monitor-check-duotone-thin",
	});
}

export default Component;
