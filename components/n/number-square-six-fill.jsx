import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o3x8fhqlr {
  fill: currentColor;
  d: path("M148 148a20 20 0 1 1-20-20a20 20 0 0 1 20 20m76-100v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-60 100a36 36 0 0 0-36-36h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2s-32.4 54.28-32.47 54.42A36 36 0 1 0 164 148");
}
</style><path class="o3x8fhqlr"/>`,
		"fallback": "ph:number-square-six-fill",
	});
}

export default Component;
