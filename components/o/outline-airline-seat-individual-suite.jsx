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
		"content": `<style>.vdczeonpm {
  fill: currentColor;
  d: path("M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V7H1v10h22v-6c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z");
}
</style><path class="vdczeonpm"/>`,
		"fallback": "ic:outline-airline-seat-individual-suite",
	});
}

export default Component;
