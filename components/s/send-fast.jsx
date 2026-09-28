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
		"content": `<style>.s1e6aeq9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 2L17.4921 17.236C17.3665 17.6608 16.9762 17.9523 16.5332 17.9523C16.2028 17.9523 15.8937 17.7891 15.7074 17.5162L12.2841 12.502C12.0733 12.1933 11.8067 11.9267 11.498 11.7159L6.4838 8.2926C6.2109 8.1063 6.0477 7.7972 6.0477 7.4668C6.0477 7.0238 6.3392 6.6335 6.764 6.5079L22 2ZM11.9652 12.0348L22 2M2 22L6.5 17.5M2 16L5.5 12.5M8 22L11.5 18.5");
}
</style><path class="s1e6aeq9b"/>`,
		"fallback": "keyline-icons:send-fast",
	});
}

export default Component;
