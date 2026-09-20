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
		"content": `<style>.ajq5z5bvz {
  d: path("M4 9h11v11H4Z");
}

.aw_88wb6w {
  d: path("m8 14 2 -2v5");
}

.mp0o2kdwg {
  fill: currentColor;
  d: path("M4 9h11v11H4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vib1b5bye {
  d: path("m4 9 5 -5h11l-5 5");
}
</style><g class="s0phu2bbs"><path class="mp0o2kdwg"/><path class="ajq5z5bvz"/><path class="vib1b5bye"/><path class="aw_88wb6w"/></g>`,
		"fallback": "iconmind:unit-duotone-bold",
	});
}

export default Component;
