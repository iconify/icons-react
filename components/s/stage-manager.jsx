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
		"content": `<style>.cpgohz4ff {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.277 9.305Q4.5 6.54 6.52 4.52Q8.79 2.25 12 2.25t5.48 2.27q2.02 2.02 2.243 4.785Q21.75 9.639 21.75 12v2.5q0 2.75-2.75 2.75t-2.75-2.75V12q0-2.326 1.967-2.685q-.214-2.151-1.798-3.734Q14.589 3.75 12 3.75T7.581 5.581Q5.997 7.164 5.783 9.315Q7.75 9.674 7.75 12v2.5q0 2.345-2 2.69v.31q0 2.25 2.25 2.25h1.338q.331-1.25 1.912-1.25h1q2 0 2 2t-2 2h-1q-1.581 0-1.912-1.25H8q-3.75 0-3.75-3.75v-.31q-2-.345-2-2.69V12q0-2.361 2.027-2.695");
}
</style><path class="cpgohz4ff"/>`,
		"fallback": "uix-solid:stage-manager",
	});
}

export default Component;
