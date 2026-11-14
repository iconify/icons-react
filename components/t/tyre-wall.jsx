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
		"content": `<style>.ha47s3xxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 16.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm11.5 0a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM7.75 6.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm-1.5 9.75h.01m11.49 0h.01M12 6.5h.01");
}
</style><path class="ha47s3xxs"/>`,
		"fallback": "uix-sharp:tyre-wall",
	});
}

export default Component;
