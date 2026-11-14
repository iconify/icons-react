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
		"content": `<style>.tkm07wu3x {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12m8.5-1.249l.125-.001h3.25l.125.001V9.25q0-1.75-1.75-1.75t-1.75 1.75zm5 .263V9.25Q15.25 6 12 6T8.75 9.25v1.764Q7 11.695 7 14.125v.75q0 3.375 3.375 3.375h3.25Q17 18.25 17 14.875v-.75q0-2.43-1.75-3.111");
}
</style><path class="tkm07wu3x"/>`,
		"fallback": "uix-solid:mandatory-lockout",
	});
}

export default Component;
