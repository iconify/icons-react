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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qp3qnnb7o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 4L16.7192 4C17.0865 4 17.4467 4.1011 17.7603 4.2923L21.0411 6.2923C21.6366 6.6554 22 7.3025 22 8C22 8.6975 21.6366 9.3446 21.0411 9.7077L17.7603 11.7077C17.4467 11.8989 17.0865 12 16.7192 12L5 12C3.3431 12 2 10.6569 2 9L2 7C2 5.3431 3.3431 4 5 4Z");
  stroke: none;
}

.txgxuq1tu {
  d: path("M5 5L16.7192 5C16.9029 5 17.0829 5.0506 17.2397 5.1461L20.5205 7.1461C21.1599 7.5359 21.1599 8.4641 20.5205 8.8539L17.2397 10.8539C17.0829 10.9494 16.9029 11 16.7192 11L5 11C3.8954 11 3 10.1046 3 9L3 7C3 5.8954 3.8954 5 5 5ZM12 2L12 5M12 11L12 22M8 22L16 22");
}
</style><g class="nrj6p8qat"><path class="qp3qnnb7o"/><path class="txgxuq1tu"/></g>`,
		"fallback": "keyline-icons:milestone-two-tone",
	});
}

export default Component;
