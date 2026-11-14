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
		"content": `<style>.msm1kqb8b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m9.144 3.049l8.03 1.53q1.38.263 1.873 1.579l2.259 6.024q.566 1.507-.573 2.645l-5.329 5.329q-1.248 1.249-2.842.49l-7.987-3.804q-1.996-.95-1.298-3.047l3.027-9.08q.692-2.075 2.84-1.666");
}
</style><path class="msm1kqb8b"/>`,
		"fallback": "uix-solid:polygon",
	});
}

export default Component;
