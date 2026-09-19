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
		"content": `<style>.wvrua7b7g {
  fill: currentColor;
  d: path("M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4zM8.5 8.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M18 11l-2.5-4l-2.5 4zm-5 2l2.5 4l2.5-4z");
}

.zg694ikhs {
  fill: currentColor;
  d: path("M19 5v14H5V5zm-9 13v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4zM8.5 8.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M18 11l-2.5-4l-2.5 4zm-5 2l2.5 4l2.5-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="zg694ikhs"/><path class="wvrua7b7g"/>`,
		"fallback": "ic:twotone-elevator",
	});
}

export default Component;
