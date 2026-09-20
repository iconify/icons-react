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
		"content": `<style>.bcqk9b5zt {
  d: path("m13 13 3 3");
}

.bm-drdp9q {
  d: path("M8 19h6v3H8Z");
}

.nqbub38-r {
  d: path("m13 13 -3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tns1-ur3v {
  d: path("m4 4 9 9");
}
</style><g class="nrj6p8qat"><path class="tns1-ur3v"/><path class="nqbub38-r"/><path class="bcqk9b5zt"/><path class="bm-drdp9q"/></g>`,
		"fallback": "iconmind:litter-pick-outline-regular",
	});
}

export default Component;
