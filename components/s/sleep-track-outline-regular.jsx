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
		"content": `<style>.dezc-zb_n {
  d: path("M2 16.5h20");
}

.dvv2tacko {
  d: path("M13 4a4 4 0 1 0 0 8 3 3 0 0 1 0 -8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t3v74kb6y {
  d: path("M2 20v-7h20v7");
}
</style><g class="nrj6p8qat"><path class="t3v74kb6y"/><path class="dezc-zb_n"/><path class="dvv2tacko"/></g>`,
		"fallback": "iconmind:sleep-track-outline-regular",
	});
}

export default Component;
