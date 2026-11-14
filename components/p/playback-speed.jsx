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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qo5oz3b7v {
  d: path("M12.375 16.75za1.45 1.45 0 0 1 0 2.5a1.41 1.41 0 0 1-2.125-1.215v-.07a1.41 1.41 0 0 1 2.125-1.215");
}

.rc64qxb9w {
  d: path("M4.25 17a9 9 0 1 1 15.5 0M12 12.5l4.25-4.25");
}
</style><g class="hntgybcog"><path class="rc64qxb9w"/><path class="qo5oz3b7v"/></g>`,
		"fallback": "uix:playback-speed",
	});
}

export default Component;
