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
		"content": `<style>.vnp5s6-dh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.25 4.5q0-2.75-2.75-2.75q-1.139 0-1.945.805q-.805.806-.805 1.945V5q0 2.345 2 2.69V12q0 3.003 2.123 5.127T12 19.25t5.127-2.123Q19.25 15.003 19.25 12V7.69q2-.345 2-2.69v-.5q0-2.75-2.75-2.75T15.75 4.5V5q0 2.345 2 2.69V12q0 2.382-1.684 4.066T12 17.75t-4.066-1.684T6.25 12V7.69q2-.345 2-2.69z");
}
</style><path class="vnp5s6-dh"/>`,
		"fallback": "uix-solid:neckband-earphones",
	});
}

export default Component;
