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
		"content": `<style>.czv374byt {
  d: path("M10 16h11");
}

.gzf8q_b5i {
  d: path("m5 9 2 2 -2 2");
}

.i33dqh0th {
  d: path("M10 11h11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pv9xj1b7g {
  d: path("M2 11h5");
}

.x7gyblbnl {
  d: path("M10 6h11");
}
</style><g class="nrj6p8qat"><path class="pv9xj1b7g"/><path class="gzf8q_b5i"/><path class="x7gyblbnl"/><path class="i33dqh0th"/><path class="czv374byt"/></g>`,
		"fallback": "iconmind:memory-save-outline-regular",
	});
}

export default Component;
