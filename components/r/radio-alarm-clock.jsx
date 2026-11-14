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
		"content": `<style>.cg94k75px {
  d: path("M5.5 13.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ovc868f9v {
  d: path("M2.5 7.5h19V20h-19Zm7 0a2.5 2.5 0 0 1 5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2hi2v3lw {
  d: path("M8.5 12.5v1.25h1m5-2.25h4m-4 4h4");
}
</style><g class="ulnmmdpxh"><path class="ovc868f9v"/><path class="cg94k75px"/><path class="z2hi2v3lw"/></g>`,
		"fallback": "uix-sharp:radio-alarm-clock",
	});
}

export default Component;
