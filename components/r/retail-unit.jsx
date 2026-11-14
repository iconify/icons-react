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
		"content": `<style>.azl-mfxuh {
  d: path("M10 13h4a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 19v-4.5A1.5 1.5 0 0 1 10 13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vi6v2b-ho {
  d: path("m3 9l1.5-5h15L21 9Zm1.5 2v9.5h15V11");
}
</style><g class="hntgybcog"><path class="vi6v2b-ho"/><path class="azl-mfxuh"/></g>`,
		"fallback": "uix:retail-unit",
	});
}

export default Component;
