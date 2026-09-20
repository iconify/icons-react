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
		"content": `<style>.lmj_kj__f {
  d: path("m3 8 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oy_r10b4z {
  d: path("m3 14 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}

.yzilgtbzd {
  d: path("m3 20 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}
</style><g class="nrj6p8qat"><path class="lmj_kj__f"/><path class="oy_r10b4z"/><path class="yzilgtbzd"/></g>`,
		"fallback": "iconmind:ocean-outline-regular",
	});
}

export default Component;
