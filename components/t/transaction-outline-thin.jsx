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

.jroakeb3a {
  d: path("M17 4h4v16h-4");
}

.l0zc9ibud {
  d: path("M8 10h8");
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.to02llleg {
  d: path("M7 4H3v16h4");
}
</style><g class="hntgybcog"><path class="to02llleg"/><path class="jroakeb3a"/><path class="l0zc9ibud"/><path class="mvm7r4bea"/></g>`,
		"fallback": "iconmind:transaction-outline-thin",
	});
}

export default Component;
