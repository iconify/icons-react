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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-5k80bos {
  d: path("m12.38 21.31l-.38.19L3 17V7l9-4.5L21 7v5.138");
}

.y7db-1s3a {
  d: path("m3 7l9 4.5L21 7m-9 4.5v3.9m0 5.2v.9M7.5 4.75l9 4.5M14.25 18a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.zxt11fbqf {
  d: path("M16.5 18a1.5 3.75 0 1 0 3 0a1.5 3.75 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="x-5k80bos"/><path class="y7db-1s3a"/><path class="zxt11fbqf"/></g>`,
		"fallback": "uix-sharp:repo-public",
	});
}

export default Component;
