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
		"content": `<style>.ftqzjnb8u {
  d: path("M6 3v18");
}

.naxi-2ilz {
  d: path("M6 5h10l3.5 3.5L16 12H6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqfv9rb9x {
  d: path("M2 21h20");
}
</style><g class="nrj6p8qat"><path class="ftqzjnb8u"/><path class="naxi-2ilz"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "iconmind:trailhead-outline-regular",
	});
}

export default Component;
