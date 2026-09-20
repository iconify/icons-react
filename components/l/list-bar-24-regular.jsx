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
		"content": `<style>.bs156tb1g {
  fill: currentColor;
  d: path("M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v1.5c0 .788-.331 1.499-.863 2c.532.501.863 1.212.863 2v1.5c0 .788-.331 1.499-.863 2c.532.501.863 1.212.863 2v1.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25v-1.5c0-.788.331-1.499.863-2a2.74 2.74 0 0 1-.863-2v-1.5c0-.788.331-1.499.863-2a2.74 2.74 0 0 1-.863-2zm16.5 1.5v-1.5c0-.69-.56-1.25-1.25-1.25H9.5v4h8.75c.69 0 1.25-.56 1.25-1.25M8 4.5H5.75c-.69 0-1.25.56-1.25 1.25v1.5c0 .69.56 1.25 1.25 1.25H8zM8 10H5.75c-.69 0-1.25.56-1.25 1.25v1.5c0 .69.56 1.25 1.25 1.25H8zm0 5.5H5.75c-.69 0-1.25.56-1.25 1.25v1.5c0 .69.56 1.25 1.25 1.25H8zm1.5 4h8.75c.69 0 1.25-.56 1.25-1.25v-1.5c0-.69-.56-1.25-1.25-1.25H9.5zm0-5.5h8.75c.69 0 1.25-.56 1.25-1.25v-1.5c0-.69-.56-1.25-1.25-1.25H9.5z");
}
</style><path class="bs156tb1g"/>`,
		"fallback": "fluent:list-bar-24-regular",
	});
}

export default Component;
