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
		"content": `<style>.ln_atzbju {
  d: path("M12 10.25C12 8 13.5 6.5 15 6.5M13.75 12c2.25 0 3.75 1.5 3.75 3M12 13.75c0 2.25-1.5 3.75-3 3.75m1.25-5.5C8 12 6.5 10.5 6.5 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdo1j_06c {
  d: path("M10.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="vdo1j_06c"/><path class="ln_atzbju"/></g>`,
		"fallback": "uix-sharp:jet-engine",
	});
}

export default Component;
