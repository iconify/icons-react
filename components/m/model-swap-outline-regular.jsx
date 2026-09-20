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
		"content": `<style>.cjc0mqb2o {
  d: path("M9 14h7");
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tuv2qrbve {
  d: path("M8 10h7");
}

.z28ycwbis {
  d: path("m13 8 2 2 -2 2");
}

.z6ec0ccup {
  d: path("m11 12 -2 2 2 2");
}
</style><g class="nrj6p8qat"><path class="iaozfqbuj"/><path class="tuv2qrbve"/><path class="z28ycwbis"/><path class="cjc0mqb2o"/><path class="z6ec0ccup"/></g>`,
		"fallback": "iconmind:model-swap-outline-regular",
	});
}

export default Component;
