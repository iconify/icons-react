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
		"content": `<style>.iu35e1xme {
  cx: 12px;
  cy: 16px;
  r: 1px;
  fill: currentColor;
}

.qnctddbnp {
  fill: currentColor;
  d: path("M9.1 5h5.8L19 9.1v5.8l-.22.22l1.42 1.41l.8-.8V8.27L15.73 3H8.27l-.8.8l1.41 1.42z");
}

.rqxz1exkl {
  fill: currentColor;
  d: path("M13 9.33V7h-2v.33zM2.41 1.58L1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.64L21.01 23l1.41-1.41zM14.9 19H9.1L5 14.9V9.1l1.05-1.05l9.9 9.9z");
}
</style><path class="qnctddbnp"/><circle class="iu35e1xme"/><path class="rqxz1exkl"/>`,
		"fallback": "ic:outline-report-off",
	});
}

export default Component;
