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
		"content": `<style>.itaz6uayy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.464 3.464Q7 4.929 7 7t1.464 3.536q.372.371.783.648q-.702.39-1.313 1Q6.25 13.868 6.25 16.25t1.684 4.066T12 22t4.066-1.684t1.684-4.066t-1.684-4.066q-.611-.61-1.313-1q.411-.277.783-.648Q17 9.071 17 7t-1.464-3.536T12 2T8.464 3.464");
}
</style><path class="itaz6uayy"/>`,
		"fallback": "uix-solid:standing-eight-count",
	});
}

export default Component;
