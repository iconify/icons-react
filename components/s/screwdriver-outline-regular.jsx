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
		"content": `<style>.covr1fb7y {
  d: path("m16.5 7.5 3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.une6cneix {
  d: path("m4 17 4 -4 3 3 -4 4Z");
}

.z27853bvv {
  d: path("M9.5 14.5 18 6");
}
</style><g class="nrj6p8qat"><path class="une6cneix"/><path class="z27853bvv"/><path class="covr1fb7y"/></g>`,
		"fallback": "iconmind:screwdriver-outline-regular",
	});
}

export default Component;
