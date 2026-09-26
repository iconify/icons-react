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
		"content": `<style>.e76gvx38z {
  d: path("M12 2L12 5M12 11L12 22M8 22L16 22");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w_h6f3byf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 4L16.7192 4C17.0865 4 17.4467 4.1011 17.7603 4.2923L21.0411 6.2923C21.6366 6.6554 22 7.3025 22 8C22 8.6975 21.6366 9.3446 21.0411 9.7077L17.7603 11.7077C17.4467 11.8989 17.0865 12 16.7192 12L5 12C3.3431 12 2 10.6569 2 9L2 7C2 5.3431 3.3431 4 5 4Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="w_h6f3byf"/><path class="e76gvx38z"/></g>`,
		"fallback": "keyline-icons:milestone-fill",
	});
}

export default Component;
