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
		"content": `<style>.gvz35xuyy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 7V17C23 19.2091 21.2091 21 19 21H5C2.79086 21 1 19.2091 1 17V7C1 4.79086 2.79086 3 5 3H19C21.2091 3 23 4.79086 23 7Z");
  stroke: none;
}

.h1a-_zb3n {
  fill: currentColor;
  d: path("M13.5 8.5C13.5 9.3284 12.8284 10 12 10C11.1716 10 10.5 9.3284 10.5 8.5C10.5 7.6716 11.1716 7 12 7C12.8284 7 13.5 7.6716 13.5 8.5Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q8edpacfm {
  d: path("M22 17V7C22 5.34315 20.6569 4 19 4H5C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17Z");
}
</style><g class="nrj6p8qat"><path class="gvz35xuyy"/><path class="q8edpacfm"/><path class="h1a-_zb3n"/></g>`,
		"fallback": "keyline-icons:tablet-two-tone",
	});
}

export default Component;
