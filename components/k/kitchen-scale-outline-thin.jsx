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

.lhtxwmluz {
  d: path("M5 12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.m7goar83z {
  d: path("M10 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mhnr27bap {
  d: path("M12 7v3");
}

.ozi-k-boi {
  d: path("M3 7h18");
}
</style><g class="hntgybcog"><path class="ozi-k-boi"/><path class="mhnr27bap"/><path class="lhtxwmluz"/><path class="m7goar83z"/></g>`,
		"fallback": "iconmind:kitchen-scale-outline-thin",
	});
}

export default Component;
