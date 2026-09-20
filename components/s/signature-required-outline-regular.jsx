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
		"content": `<style>.d1zyr9bfc {
  d: path("M12 4v4");
}

.j534ltbcb {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.m1mjigbsi {
  d: path("M4 8h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o3jwr8bmt {
  d: path("m9 18 6 -6");
}
</style><g class="nrj6p8qat"><path class="j534ltbcb"/><path class="m1mjigbsi"/><path class="d1zyr9bfc"/><path class="o3jwr8bmt"/></g>`,
		"fallback": "iconmind:signature-required-outline-regular",
	});
}

export default Component;
