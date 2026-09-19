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
		"content": `<style>.hcu0_-klr {
  fill: currentColor;
  d: path("M17 5H1v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zM3 11V7h4v4zm3 6.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M13 11H9V7h4zm5 6.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M15 11V7h1l4 4z");
}
</style><path class="hcu0_-klr"/>`,
		"fallback": "ic:sharp-airport-shuttle",
	});
}

export default Component;
