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
		"content": `<style>.idl8_ab9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.08 7.35l13.84-3.7q.58-.15.58.45v5.3q0 .6-.6.6H5.1q-.6 0-.6-.6V8.1q0-.6.58-.75M12 10v11.25m-4.5 0h9");
}
</style><path class="idl8_ab9i"/>`,
		"fallback": "iconoven:pulpit",
	});
}

export default Component;
