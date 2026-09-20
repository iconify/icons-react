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
		"content": `<style>.xgpjwtxkl {
  fill: currentColor;
  d: path("M184 164h-20V48a4 4 0 0 0-7.12-2.5l-96 120A4 4 0 0 0 64 172h92v36a4 4 0 0 0 8 0v-36h20a4 4 0 0 0 0-8m-28 0H72.32L156 59.4Z");
}
</style><path class="xgpjwtxkl"/>`,
		"fallback": "ph:number-four-thin",
	});
}

export default Component;
