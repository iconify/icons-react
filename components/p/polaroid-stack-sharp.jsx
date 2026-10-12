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
		"content": `<style>.fzg_b1bjp {
  d: path("M2.75 17.75v-15h15");
}

.kd036-57e {
  d: path("M8.75 8.75h10v8.5h-10z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-n2g1b_x {
  d: path("M6.25 6.25h15v15h-15z");
}
</style><g class="x2cwu0gfd"><path class="fzg_b1bjp"/><path class="z-n2g1b_x"/><path class="kd036-57e"/></g>`,
		"fallback": "iconoven:polaroid-stack-sharp",
	});
}

export default Component;
