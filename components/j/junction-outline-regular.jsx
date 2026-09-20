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
		"content": `<style>.cfwe2fbcx {
  d: path("M8 22v-6H2");
}

.gaonsmbbz {
  d: path("M16 22v-6h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o7mb9vbwf {
  d: path("M8 2v6H2");
}

.v3qgglbcl {
  d: path("M12 9.5v5");
}

.x_6spmb5u {
  d: path("M16 2v6h6");
}
</style><g class="nrj6p8qat"><path class="o7mb9vbwf"/><path class="x_6spmb5u"/><path class="cfwe2fbcx"/><path class="gaonsmbbz"/><path class="v3qgglbcl"/></g>`,
		"fallback": "iconmind:junction-outline-regular",
	});
}

export default Component;
