import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gpul7pvkh {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m14.035 44.508h-5.65V26.882q.001-.846.02-2.372q.02-1.527.02-2.353l-5.498 24.351h-5.893l-5.459-24.351q0 .826.02 2.353q.02 1.526.02 2.372v19.626h-5.65V17.492h8.824l5.281 22.814l5.242-22.814h8.725v29.016z");
}
</style><path class="gpul7pvkh"/>`,
		"fallback": "emojione-monotone:letter-m",
	});
}

export default Component;
