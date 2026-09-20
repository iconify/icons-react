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
		"content": `<style>.fm9ovcbvk {
  d: path("M4 4h6c0 -1.5 4 -1.5 4 0h6v6c1.5 0 1.5 4 0 4v6H4v-6c1.5 0 1.5 -4 0 -4Z");
}

.htuj7h56e {
  fill: currentColor;
  d: path("M4 4h6c0 -1.5 4 -1.5 4 0h6v6c1.5 0 1.5 4 0 4v6H4v-6c1.5 0 1.5 -4 0 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="htuj7h56e"/><path class="fm9ovcbvk"/></g>`,
		"fallback": "iconmind:puzzle-piece-duotone-regular",
	});
}

export default Component;
