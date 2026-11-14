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
		"content": `<style>.hcauwkbvm {
  d: path("M6 21.5c0-5.5 6.5-7 6.5-12.5c0-3-1.5-5-3.5-6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ighr8abuq {
  d: path("M10 21.5c0-5.5 6.5-7 6.5-12.5c0-3-1.5-5-3.5-6.5");
}
</style><g class="hntgybcog"><path class="hcauwkbvm"/><path class="ighr8abuq"/></g>`,
		"fallback": "uix:ski-tracks",
	});
}

export default Component;
