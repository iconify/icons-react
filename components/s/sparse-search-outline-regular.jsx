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
		"content": `<style>.b7nacdcee {
  d: path("M3 6h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p0o5ir5ue {
  d: path("M15 16h6");
}

.p2x4fkb_u {
  d: path("M15 6h6");
}

.pt-3kkb2k {
  d: path("M9 11h6");
}

.vd0jm7r_j {
  d: path("M3 16h6");
}
</style><g class="nrj6p8qat"><path class="b7nacdcee"/><path class="p2x4fkb_u"/><path class="pt-3kkb2k"/><path class="vd0jm7r_j"/><path class="p0o5ir5ue"/></g>`,
		"fallback": "iconmind:sparse-search-outline-regular",
	});
}

export default Component;
