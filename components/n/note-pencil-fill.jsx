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
		"content": `<style>.wzfu-j-wq {
  fill: currentColor;
  d: path("M224 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v160h160v-80a8 8 0 0 1 16 0m5.66-58.34l-96 96A8 8 0 0 1 128 168H96a8 8 0 0 1-8-8v-32a8 8 0 0 1 2.34-5.66l96-96a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32m-17-5.66L192 43.31L179.31 56L200 76.69Z");
}
</style><path class="wzfu-j-wq"/>`,
		"fallback": "ph:note-pencil-fill",
	});
}

export default Component;
