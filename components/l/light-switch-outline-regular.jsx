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
		"content": `<style>.i3gcam9kv {
  d: path("M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s_e99zbvv {
  d: path("M10 8h4v8h-4Z");
}

.y0y0ccsoe {
  d: path("M10 12h4");
}
</style><g class="nrj6p8qat"><path class="i3gcam9kv"/><path class="s_e99zbvv"/><path class="y0y0ccsoe"/></g>`,
		"fallback": "iconmind:light-switch-outline-regular",
	});
}

export default Component;
