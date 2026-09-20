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

.lob-p4n4f {
  d: path("M18 5v8");
}

.rk3avflyg {
  d: path("M18 6h4v3.5h-4");
}

.wsird7b6w {
  d: path("m2 21 5 -5 4 4 7 -7 4 4");
}
</style><g class="hntgybcog"><path class="wsird7b6w"/><path class="lob-p4n4f"/><path class="rk3avflyg"/></g>`,
		"fallback": "iconmind:investment-goal-outline-thin",
	});
}

export default Component;
