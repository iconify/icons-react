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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ww1b8ib_x {
  d: path("M8 14h2.5l2.5 -2.5");
}

.zpw0h_x9q {
  d: path("M8 9h2.5l2.5 2.5h3");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="zpw0h_x9q"/><path class="ww1b8ib_x"/></g>`,
		"fallback": "iconmind:passage-merge-outline-regular",
	});
}

export default Component;
