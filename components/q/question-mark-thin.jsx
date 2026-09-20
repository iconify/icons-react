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
		"content": `<style>.q-g3lnbce {
  fill: currentColor;
  d: path("M188 96c0 27.51-24.77 50.09-56 51.89V160a4 4 0 0 1-8 0v-16a4 4 0 0 1 4-4c28.67 0 52-19.74 52-44s-23.33-44-52-44s-52 19.74-52 44a4 4 0 0 1-8 0c0-28.67 26.92-52 60-52s60 23.33 60 52m-60 100a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}
</style><path class="q-g3lnbce"/>`,
		"fallback": "ph:question-mark-thin",
	});
}

export default Component;
