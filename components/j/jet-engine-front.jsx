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
		"content": `<style>.dagk_7b5t {
  d: path("M12 12c-3.5-2.5-3-7 0-7s3.5 4.5 0 7Zm0 0c4-1.75 7.5.9 6 3.5c-1.5 2.5-5.5.75-6-3.5Zm0 0c-.5 4.25-4.5 6-6 3.5c-1.5-2.6 2-5.25 6-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="dagk_7b5t"/></g>`,
		"fallback": "uix-sharp:jet-engine-front",
	});
}

export default Component;
