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
		"content": `<style>.b2n99wbku {
  d: path("M12 12.5v3");
}

.elo_ccj2r {
  d: path("M9 4v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tlah7acnn {
  d: path("M6 13a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.uy7nmfbhi {
  d: path("M11 18.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.yz_nd208h {
  d: path("M15 4v7");
}
</style><g class="nrj6p8qat"><path class="tlah7acnn"/><path class="elo_ccj2r"/><path class="yz_nd208h"/><path class="b2n99wbku"/><path class="uy7nmfbhi"/></g>`,
		"fallback": "iconmind:tool-permission-outline-regular",
	});
}

export default Component;
