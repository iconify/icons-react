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
		"content": `<style>.akhrngbmf {
  d: path("M15 10c2 -2 0 -4 2 -6");
}

.comy-yirf {
  d: path("M9 10c2 -2 0 -4 2 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vow7fbbnh {
  fill: currentColor;
  d: path("M4 12h16c0 5 -4 9 -8 9s-8 -4 -8 -9");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xi253xtcz {
  d: path("M4 12h16c0 5 -4 9 -8 9s-8 -4 -8 -9");
}
</style><g class="hntgybcog"><path class="vow7fbbnh"/><path class="xi253xtcz"/><path class="comy-yirf"/><path class="akhrngbmf"/></g>`,
		"fallback": "iconmind:soup-duotone-thin",
	});
}

export default Component;
