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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nkxlyibbw {
  d: path("m8.91 7.62l.42 1q.15.37.55.4l1.09.1q.4.03.09.29l-.82.71q-.3.27-.21.66l.25 1.06q.09.38-.26.18l-.93-.56q-.34-.21-.68 0l-.93.56q-.35.2-.26-.18l.25-1.06q.09-.39-.21-.66l-.82-.71q-.31-.26.09-.29l1.09-.1q.4-.03.55-.4l.42-1q.16-.37.32 0m6.5 0l.42 1q.15.37.55.4l1.09.1q.4.03.09.29l-.82.71q-.3.27-.21.66l.25 1.06q.09.38-.26.18l-.93-.56q-.34-.21-.68 0l-.93.56q-.35.2-.26-.18l.25-1.06q.09-.39-.21-.66l-.82-.71q-.31-.26.09-.29l1.09-.1q.4-.03.55-.4l.42-1q.16-.37.32 0M8.75 15h6.5a3.25 3.25 0 0 1-6.5 0");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="nkxlyibbw"/></g>`,
		"fallback": "iconoven:star-struck",
	});
}

export default Component;
