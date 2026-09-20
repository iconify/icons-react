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
		"content": `<style>.qzlo3kulr {
  fill: currentColor;
  d: path("M132 32v32a4 4 0 0 1-8 0V32a4 4 0 0 1 8 0m92 92h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m-47.92 46.43a4 4 0 1 0-5.65 5.65l22.62 22.63a4 4 0 0 0 5.66-5.66ZM128 188a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m-48.08-17.57l-22.63 22.62a4 4 0 0 0 5.71 5.66l22.62-22.63a4 4 0 1 0-5.65-5.65ZM68 128a4 4 0 0 0-4-4H32a4 4 0 0 0 0 8h32a4 4 0 0 0 4-4m-5-70.71A4 4 0 0 0 57.29 63l22.63 22.57a4 4 0 1 0 5.65-5.65Z");
}
</style><path class="qzlo3kulr"/>`,
		"fallback": "ph:spinner-gap-thin",
	});
}

export default Component;
