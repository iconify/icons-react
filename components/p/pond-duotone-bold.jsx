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
		"content": `<style>.b-af79bpy {
  d: path("M12 7c5 0 9 2 9 6s-4 6 -9 6 -9 -2 -9 -6 4 -6 9 -6");
}

.hk8a83bva {
  d: path("M8 15c2 -2 6 -2 8 0");
}

.oi9g91b_q {
  fill: currentColor;
  d: path("M12 7c5 0 9 2 9 6s-4 6 -9 6 -9 -2 -9 -6 4 -6 9 -6");
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
</style><g class="s0phu2bbs"><path class="oi9g91b_q"/><path class="b-af79bpy"/><path class="hk8a83bva"/></g>`,
		"fallback": "iconmind:pond-duotone-bold",
	});
}

export default Component;
