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
		"content": `<style>.lhtdbsg9n {
  fill: currentColor;
  d: path("M200 28H72a20 20 0 0 0-20 20v168a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12V48a12 12 0 0 1 24 0v104a4 4 0 0 0 8 0V48a20 20 0 0 0-20-20M72 36h112a19.86 19.86 0 0 0-4 12v140H60V48a12 12 0 0 1 12-12m104 184H64a4 4 0 0 1-4-4v-20h120v20a4 4 0 0 1-4 4");
}
</style><path class="lhtdbsg9n"/>`,
		"fallback": "ph:towel-thin",
	});
}

export default Component;
