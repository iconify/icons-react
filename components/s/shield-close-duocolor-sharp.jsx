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

.qyxqzrb2b {
  d: path("M12 3h8v7c0 5.5-3.5 9-8 11c-4.5-2-8-5.5-8-11V3z");
}

.wwmj5jnnn {
  stroke-opacity: 0.4;
  d: path("m10 9l4 4m0-4l-4 4");
}
</style><g class="nrj6p8qat"><path class="wwmj5jnnn"/><path class="qyxqzrb2b"/></g>`,
		"fallback": "coolicons:shield-close-duocolor-sharp",
	});
}

export default Component;
