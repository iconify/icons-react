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
		"content": `<style>.f_pwvj4pn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.734 16.816Q9.25 11.755 9.25 8.5q0-2.589 1.831-4.419Q12.911 2.25 15.5 2.25t4.419 1.831T21.75 8.5q0 3.263-5.509 8.339Q16.076 19.75 13 19.75H7.69q-.345 2-2.69 2q-2.75 0-2.75-2.75T5 16.25q2.345 0 2.69 2H13q1.584 0 1.734-1.434M15.5 5.75q-2.75 0-2.75 2.75t2.75 2.75t2.75-2.75t-2.75-2.75");
}
</style><path class="f_pwvj4pn"/>`,
		"fallback": "uix-solid:waypoint",
	});
}

export default Component;
