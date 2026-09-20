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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.j2-drqnzq {
  d: path("m13 7 -4 4 4 4");
}

.lp-jzobeh {
  d: path("M9 11H5");
}

.lvrweqtce {
  d: path("m13 15 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uqqniu6bc {
  d: path("M11 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="uqqniu6bc"/><path class="j2-drqnzq"/><path class="lp-jzobeh"/><path class="lvrweqtce"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:marathon-outline-regular",
	});
}

export default Component;
