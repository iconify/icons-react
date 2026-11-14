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
		"content": `<style>.cm35mr6ox {
  d: path("M8 15.5v-.75a1.002 1.002 0 0 1 1.672-.745l1.47 1.323A.959.959 0 0 1 10.5 17h-1A1.5 1.5 0 0 1 8 15.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mci1gl8fq {
  d: path("M4 19V8.121a1.5 1.5 0 0 1 2.561-1.06l10.878 10.878a1.5 1.5 0 0 1-1.06 2.561H5.5A1.5 1.5 0 0 1 4 19");
}
</style><g class="hntgybcog"><path class="mci1gl8fq"/><path class="cm35mr6ox"/></g>`,
		"fallback": "uix:set-square",
	});
}

export default Component;
