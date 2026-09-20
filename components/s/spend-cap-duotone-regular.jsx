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
		"content": `<style>.k0i5x1bvn {
  d: path("M6 14a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.nktjbrhkd {
  d: path("M4 4h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u7m7z6ojw {
  d: path("M10 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.w5mwanbwq {
  fill: currentColor;
  d: path("M6 14a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z1ra8bb5p {
  fill: currentColor;
  d: path("M10 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="w5mwanbwq"/><path class="z1ra8bb5p"/><path class="nktjbrhkd"/><path class="k0i5x1bvn"/><path class="u7m7z6ojw"/></g>`,
		"fallback": "iconmind:spend-cap-duotone-regular",
	});
}

export default Component;
