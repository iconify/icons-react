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
		"content": `<style>.jwhtd-bdk {
  fill: currentColor;
  d: path("M85.25 40a6 6 0 0 1 6-6H192a6 6 0 0 1 0 12h-8.85l19.17 108.64a6 6 0 0 1-4.86 7a5.4 5.4 0 0 1-1.05.1a6 6 0 0 1-5.9-5L171 46H91.25a6 6 0 0 1-6-6M212 220.44a6 6 0 0 1-8.48-.4L169 182h-35v58a6 6 0 0 1-12 0v-58H40a6 6 0 0 1 0-12h11l17.38-98.67L43.56 44a6 6 0 0 1 8.88-8l160 176a6 6 0 0 1-.44 8.44M158 170L78.58 82.56L63.15 170Z");
}
</style><path class="jwhtd-bdk"/>`,
		"fallback": "ph:push-pin-simple-slash-light",
	});
}

export default Component;
