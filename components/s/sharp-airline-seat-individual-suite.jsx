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
		"content": `<style>.z6kf2yryt {
  fill: currentColor;
  d: path("M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3s1.35 3 3 3m16-6H11v7H3V7H1v10h22z");
}
</style><path class="z6kf2yryt"/>`,
		"fallback": "ic:sharp-airline-seat-individual-suite",
	});
}

export default Component;
