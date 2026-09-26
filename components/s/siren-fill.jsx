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
		"content": `<style>.gjyn-2b-e {
  d: path("M5.636 6.636L4.9289 5.9289M12 4L12 3M18.364 6.636L19.0711 5.9289");
}

.n1x972b7n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 16L6 13C6 9.6863 8.6863 7 12 7C15.3137 7 18 9.6863 18 13L18 16L19 16C20.1046 16 21 16.8954 21 18L21 20C21 21.1046 20.1046 22 19 22L5 22C3.8954 22 3 21.1046 3 20L3 18C3 16.8954 3.8954 16 5 16L6 16ZM5 18L5 20L19 20L19 18L5 18Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="n1x972b7n"/><path class="gjyn-2b-e"/></g>`,
		"fallback": "keyline-icons:siren-fill",
	});
}

export default Component;
