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
		"content": `<style>.y9pxet6ti {
  fill: currentColor;
  d: path("M156 128c0 14.86-5.9 40-28 40s-28-25.14-28-40s5.9-40 28-40s28 25.14 28 40m68-80v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-52 80c0-14.25-3.56-27.53-10-37.39C154 78.44 142.23 72 128 72s-26 6.44-34 18.61c-6.47 9.86-10 23.14-10 37.39s3.56 27.53 10 37.39c8 12.17 19.74 18.61 34 18.61s26-6.44 34-18.61c6.44-9.86 10-23.14 10-37.39");
}
</style><path class="y9pxet6ti"/>`,
		"fallback": "ph:number-square-zero-fill",
	});
}

export default Component;
