import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":290};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t-gozdc5j {
  fill: var(--svg-color--05ce78, #05ce78);
  d: path("m209.302 144.583l26.28-26.105c27.224-27.042 27.224-71.087 0-98.129s-71.564-27.043-98.788 0l-9.569 9.504C114.557 11.781 93.667 0 69.812 0C31.267 0 0 31.059 0 69.346v150.34c0 38.287 31.267 69.346 69.812 69.346c23.855 0 44.745-11.781 57.413-29.854l9.569 9.505c27.224 27.043 71.564 27.043 98.788 0s27.224-71.086 0-98.129z");
}
</style><path class="t-gozdc5j"/>`,
		"fallback": "logos:kickstarter-icon",
	});
}

export default Component;
