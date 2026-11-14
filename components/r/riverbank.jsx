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
		"content": `<style>.v576vjb-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h5l5.5 8H2.5Zm2.5 0L2.75 6M5 11.5l.25-7m-.25 7L8 6m2.75 10q2-1.5 4 0t4 0q1.5-1.25 2.75-.5");
}
</style><path class="v576vjb-n"/>`,
		"fallback": "uix-sharp:riverbank",
	});
}

export default Component;
