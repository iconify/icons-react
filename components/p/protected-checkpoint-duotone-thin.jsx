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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.hee6_gbza {
  d: path("M9 7h6v3l-3 3 -3 -3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kysn4r6df {
  fill: currentColor;
  d: path("M9 7h6v3l-3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}
</style><g class="hntgybcog"><path class="kysn4r6df"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="hee6_gbza"/></g>`,
		"fallback": "iconmind:protected-checkpoint-duotone-thin",
	});
}

export default Component;
