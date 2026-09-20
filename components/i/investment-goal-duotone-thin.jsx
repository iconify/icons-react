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
		"content": `<style>.c2t_nhe0e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 6h4v3.5h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6fwf7hbu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m2 21 5 -5 4 4 7 -7 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lgpnhhbhj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 5v8");
  opacity: var(--svg-opacity--0-2, 0.2);
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
</style><g class="hntgybcog"><path class="i6fwf7hbu"/><path class="lgpnhhbhj"/><path class="c2t_nhe0e"/><path class="wsird7b6w"/><path class="lob-p4n4f"/><path class="rk3avflyg"/></g>`,
		"fallback": "iconmind:investment-goal-duotone-thin",
	});
}

export default Component;
