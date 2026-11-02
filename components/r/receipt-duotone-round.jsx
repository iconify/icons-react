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
		"content": `<style>.cmbn2hr-k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h4a4 4 0 0 1 4 4v13c0 .369-.631.369-1 0a1.414 1.414 0 0 0-2 0a1.414 1.414 0 0 1-2 0a1.414 1.414 0 0 0-2 0a1.414 1.414 0 0 1-2 0a1.414 1.414 0 0 0-2 0a1.414 1.414 0 0 1-2 0a1.414 1.414 0 0 0-2 0c-.369.369-1 .369-1 0V7a4 4 0 0 1 4-4zM8 7h8m-8 4h8m-8 4h4");
}

.ft5dv1b6b {
  fill: none;
}

.nch0l7kqp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 3a4 4 0 0 1 4 4v13c0 .369-.631.369-1 0a1.415 1.415 0 0 0-2 0a1.415 1.415 0 0 1-2 0a1.415 1.415 0 0 0-2 0a1.415 1.415 0 0 1-2 0a1.415 1.415 0 0 0-2 0a1.415 1.415 0 0 1-2 0a1.415 1.415 0 0 0-2 0c-.369.369-1 .369-1 0V7a4 4 0 0 1 4-4Z");
}
</style><g class="ft5dv1b6b"><path class="nch0l7kqp"/><path class="cmbn2hr-k"/></g>`,
		"fallback": "coolicons:receipt-duotone-round",
	});
}

export default Component;
