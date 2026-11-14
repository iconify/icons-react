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
		"content": `<style>.h-phbdf5r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 2q1.082 0 1.717.564q.8.711.511 1.868q-.007.028-.016.055q-.142.424-.592 1.053q-.197.276-.289.46q3.272 3.173 3.842 8.551q.388-.051.827-.051t.827.051q.57-5.378 3.842-8.551q-.092-.184-.289-.46q-.45-.629-.592-1.053q-.009-.027-.016-.055q-.289-1.157.511-1.868Q16.918 2 18 2q4 0 4 4.25t-4 4.25q-1.082 0-1.717-.564q-.248-.221-.392-.485q-1.315 2.346-1.603 5.578q1.462.879 1.462 3.221Q15.75 22 12 22t-3.75-3.75q0-2.342 1.462-3.221q-.288-3.232-1.603-5.578q-.144.264-.392.485Q7.082 10.5 6 10.5q-4 0-4-4.25T6 2");
}
</style><path class="h-phbdf5r"/>`,
		"fallback": "uix-solid:urinary-tract",
	});
}

export default Component;
