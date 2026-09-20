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
		"content": `<style>.wplu8f22z {
  fill: currentColor;
  d: path("M188 64v128a12 12 0 0 1-24 0V64a12 12 0 0 1 24 0m36-12a12 12 0 0 0-12 12v128a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12m-76 76a19.71 19.71 0 0 1-9.19 16.71l-88.18 56.16A19.91 19.91 0 0 1 20 184.15V71.85a19.91 19.91 0 0 1 30.63-16.72l88.18 56.16A19.71 19.71 0 0 1 148 128m-27.62 0L44 79.37v97.26Z");
}
</style><path class="wplu8f22z"/>`,
		"fallback": "ph:play-pause-bold",
	});
}

export default Component;
