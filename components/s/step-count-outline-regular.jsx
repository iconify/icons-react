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
		"content": `<style>.iqr3ry8kv {
  d: path("M3 19v-4h5l4 -4h4l4 4v4Z");
}

.ndgriosbe {
  d: path("M3 6h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u1cucg5cn {
  d: path("M3 9h3");
}
</style><g class="nrj6p8qat"><path class="iqr3ry8kv"/><path class="ndgriosbe"/><path class="u1cucg5cn"/></g>`,
		"fallback": "iconmind:step-count-outline-regular",
	});
}

export default Component;
