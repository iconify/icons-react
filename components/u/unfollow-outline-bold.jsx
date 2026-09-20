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
		"content": `<style>.ejfmpibyt {
  d: path("M7 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.fgh6wnb3a {
  d: path("M6 17a4 4 0 0 1 8 0");
}

.p8a31xr4o {
  d: path("M16 12h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ejfmpibyt"/><path class="fgh6wnb3a"/><path class="p8a31xr4o"/></g>`,
		"fallback": "iconmind:unfollow-outline-bold",
	});
}

export default Component;
