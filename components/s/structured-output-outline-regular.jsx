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
		"content": `<style>.aw9_u8hja {
  d: path("m10 8.5 -2 2v3l2 2");
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.l_iy8xb7g {
  d: path("m14 8.5 2 2v3l-2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="iaozfqbuj"/><path class="aw9_u8hja"/><path class="l_iy8xb7g"/></g>`,
		"fallback": "iconmind:structured-output-outline-regular",
	});
}

export default Component;
