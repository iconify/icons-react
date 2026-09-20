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
		"content": `<style>.agce8nbhp {
  fill: currentColor;
  d: path("M14 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.b_3lf0wwh {
  d: path("M2 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.f2vh026ub {
  d: path("M10 9h4");
}

.fkf_gcbra {
  d: path("M10 15h4");
}

.moemtk9nb {
  d: path("M14 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s5s3nobnb {
  fill: currentColor;
  d: path("M2 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="s5s3nobnb"/><path class="agce8nbhp"/><path class="b_3lf0wwh"/><path class="moemtk9nb"/><path class="f2vh026ub"/><path class="fkf_gcbra"/></g>`,
		"fallback": "iconmind:referential-integrity-duotone-bold",
	});
}

export default Component;
