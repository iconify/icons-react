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
		"content": `<style>.eua2dln1y {
  fill: currentColor;
  d: path("M233.34 190.09L145.88 38.22a20.75 20.75 0 0 0-35.76 0L22.66 190.09a19.52 19.52 0 0 0 0 19.71A20.36 20.36 0 0 0 40.54 220h174.92a20.36 20.36 0 0 0 17.86-10.2a19.52 19.52 0 0 0 .02-19.71m-6.94 15.71a12.47 12.47 0 0 1-10.94 6.2H40.54a12.47 12.47 0 0 1-10.94-6.2a11.45 11.45 0 0 1 0-11.72l87.45-151.87a12.76 12.76 0 0 1 21.9 0l87.45 151.87a11.45 11.45 0 0 1 0 11.72");
}
</style><path class="eua2dln1y"/>`,
		"fallback": "ph:triangle-thin",
	});
}

export default Component;
