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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.nj-8yn50i {
  d: path("M6 8c0 -2 12 -2 12 0v11c0 2 -12 2 -12 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u2j6nmbhr {
  d: path("M6 8c0 2 12 2 12 0");
}
</style><g class="nrj6p8qat"><path class="nj-8yn50i"/><path class="u2j6nmbhr"/><path class="c4khiwgvb"/></g>`,
		"fallback": "iconmind:smart-speaker-outline-regular",
	});
}

export default Component;
