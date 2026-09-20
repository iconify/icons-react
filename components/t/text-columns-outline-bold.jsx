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
		"content": `<style>.gsl5knvuq {
  d: path("M15 8h6");
}

.p0o5ir5ue {
  d: path("M15 16h6");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sjde2nyhb {
  d: path("M3 8h6");
}

.vd0jm7r_j {
  d: path("M3 16h6");
}
</style><g class="s0phu2bbs"><path class="sjde2nyhb"/><path class="vd0jm7r_j"/><path class="r7xk8o29f"/><path class="gsl5knvuq"/><path class="p0o5ir5ue"/></g>`,
		"fallback": "iconmind:text-columns-outline-bold",
	});
}

export default Component;
