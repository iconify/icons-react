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
		"content": `<style>.nxyq68n-n {
  fill: currentColor;
  d: path("M216.07 224.88a12 12 0 0 1-16.95-.81L140 159v29h20a12 12 0 0 1 0 24H96a12 12 0 0 1 0-24h20v-55.36l-48-52.8V88a12 12 0 0 1-24 0V56a12 12 0 0 1 .23-2.31l-5.11-5.62a12 12 0 1 1 17.76-16.14l160 176a12 12 0 0 1-.81 16.95M116 68v.57a12 12 0 1 0 24 0V68h48v20a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12h-83.4a12 12 0 0 0-.6 24");
}
</style><path class="nxyq68n-n"/>`,
		"fallback": "ph:text-t-slash-bold",
	});
}

export default Component;
