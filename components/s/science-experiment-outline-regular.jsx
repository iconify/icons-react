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
		"content": `<style>.c8uh2gw9u {
  d: path("M9 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mss3k8l1q {
  d: path("M12.5 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vrp3h-b8z {
  d: path("M10 3h4v5.5a6.5 6.5 0 1 1 -4 0Z");
}
</style><g class="nrj6p8qat"><path class="vrp3h-b8z"/><path class="c8uh2gw9u"/><path class="mss3k8l1q"/></g>`,
		"fallback": "iconmind:science-experiment-outline-regular",
	});
}

export default Component;
