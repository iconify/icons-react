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
		"content": `<style>.frulv0m7f {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2-2V2.75M13.75 11l6-3.5m-6 5.5l6 3.5M12 14v7.25M10.25 13l-6 3.5m6-5.5l-6-3.5");
}

.rocslgbmd {
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rocslgbmd"/><path class="frulv0m7f"/></g>`,
		"fallback": "uix-sharp:vault-wheel",
	});
}

export default Component;
