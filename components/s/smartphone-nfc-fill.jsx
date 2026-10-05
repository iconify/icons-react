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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o6t2jjb4m {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 3C11.2092 3 13 4.79082 13 7V17C13 19.2092 11.2092 21 9 21H5C2.79082 21 1 19.2092 1 17V7C1 4.79082 2.79082 3 5 3H9ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H8C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7H6Z");
  stroke: none;
}

.zkpvhnbzq {
  d: path("M17.4283 8.5C17.8069 9.6281 18 10.8101 18 12C18 13.1899 17.8069 14.3719 17.4283 15.5M21.3091 7.5C21.767 8.9561 22 10.4736 22 12C22 13.5264 21.767 15.0439 21.3091 16.5");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="o6t2jjb4m"/><path class="zkpvhnbzq"/></g>`,
		"fallback": "keyline-icons:smartphone-nfc-fill",
	});
}

export default Component;
