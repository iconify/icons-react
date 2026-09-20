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
		"content": `<style>.ht401hbxd {
  fill: currentColor;
  d: path("M18.25 13a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75m-13-11a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 5.25 2m7.25 11.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="ht401hbxd"/>`,
		"fallback": "fluent:text-align-justify-low-90-24-regular",
	});
}

export default Component;
