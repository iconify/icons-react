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
		"content": `<style>.hn2mekz0o {
  d: path("M12 21H7a4 4 0 0 1-4-4v-6c0-1.25 1.126-2.75 3-4l3-2a5.41 5.41 0 0 1 6 0l3 2c1.874 1.25 3 2.75 3 4v6a4 4 0 0 1-4 4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uofenob3g {
  stroke-opacity: 0.4;
  d: path("m4 10l4 4c.64.64 1.72 1 3 1h2c1.28 0 2.36-.36 3-1l4-4");
}
</style><g class="nrj6p8qat"><path class="uofenob3g"/><path class="hn2mekz0o"/></g>`,
		"fallback": "coolicons:mail-open-duocolor-round",
	});
}

export default Component;
