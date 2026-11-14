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
		"content": `<style>.awowfmfwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.868 15.889L15.889 3.868a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L8.111 20.132a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 0-1.414Zm1.591-4.066l6.718 6.718m-.354-13.082l6.718 6.718");
}
</style><path class="awowfmfwe"/>`,
		"fallback": "uix-sharp:wakeboard",
	});
}

export default Component;
