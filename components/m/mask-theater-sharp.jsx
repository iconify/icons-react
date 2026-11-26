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
		"content": `<style>.p84x9onbp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 10L7 9C7 8.1716 7.6716 7.5 8.5 7.5C9.3284 7.5 10 8.1716 10 9L10 10M14 10L14 9C14 8.1716 14.6716 7.5 15.5 7.5C16.3284 7.5 17 8.1716 17 9L17 10M3 2.001L10.3867 2.8586C11.4551 3.0332 12.5449 3.0332 13.6133 2.8586L21 2.001L21 12.0153C21 14.5739 20.0192 17.0353 18.2595 18.8927L17.4447 19.7529C14.4864 22.749 9.5136 22.749 6.5554 19.7529L5.7405 18.8927C3.9808 17.0353 3 14.5739 3 12.0153ZM7 13C7.5 14.4583 9.1716 18 12 18C14.5 18 16.5 14.875 17 13M7 13C8.6667 13.7546 13 14.8111 17 13");
}
</style><path class="p84x9onbp"/>`,
		"fallback": "keyline-icons:mask-theater-sharp",
	});
}

export default Component;
