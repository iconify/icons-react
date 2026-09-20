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

.c6jnv7x8o {
  d: path("M11 10h6");
}

.mmi5hvbvz {
  d: path("M9 8v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ws9v8zbhe {
  d: path("M11 16h6");
}

.y1_flyglu {
  d: path("M11 13h6");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="mmi5hvbvz"/><path class="c6jnv7x8o"/><path class="y1_flyglu"/><path class="ws9v8zbhe"/></g>`,
		"fallback": "iconmind:policy-outline-regular",
	});
}

export default Component;
