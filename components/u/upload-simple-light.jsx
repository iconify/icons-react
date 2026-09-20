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
		"content": `<style>.vp0dmdb3v {
  fill: currentColor;
  d: path("M222 144v64a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6v-64a6 6 0 0 1 12 0v58h164v-58a6 6 0 0 1 12 0M92.24 76.24L122 46.49V144a6 6 0 0 0 12 0V46.49l29.76 29.75a6 6 0 0 0 8.48-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 8.48 8.48");
}
</style><path class="vp0dmdb3v"/>`,
		"fallback": "ph:upload-simple-light",
	});
}

export default Component;
