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
		"content": `<style>.l4tlrh0tt {
  fill: currentColor;
  d: path("M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-82-94a34.5 34.5 0 0 0-5.6.47l18.75-31.39a6 6 0 0 0-10.3-6.16l-32.24 54A34 34 0 1 0 128 114m0 56a22 22 0 1 1 22-22a22 22 0 0 1-22 22");
}
</style><path class="l4tlrh0tt"/>`,
		"fallback": "ph:number-square-six-light",
	});
}

export default Component;
