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
		"content": `<style>.r766z4b5h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.75 7.75q0-4.5-4.75-4.5t-4.75 4.5q0 1.053 1.089 2.36q.196.235.308.39q-.112.155-.308.39q-1.089 1.307-1.089 2.36q0 4.5 4.75 4.5t4.75-4.5q0-1.053-1.089-2.36q-.196-.235-.308-.39q.112-.155.308-.39q1.089-1.307 1.089-2.36m.54 10.679l.732-1.351q.638-1.179 1.978-1.179t1.979 1.179l.731 1.351q.609 1.124-.045 2.223q-.655 1.098-1.933 1.098h-1.464q-1.278 0-1.933-1.098q-.654-1.099-.046-2.223z");
}
</style><path class="r766z4b5h"/>`,
		"fallback": "uix-solid:peanut-allergy",
	});
}

export default Component;
