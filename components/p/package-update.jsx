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
		"content": `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.rwafh7bnk {
  d: path("m2.5 6.5l7.5 4l7.5-4m-7.5 4v8m10.75 0A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yp8j4bb2q {
  d: path("M12.647 17.088L10 18.5l-7.5-4v-8l7.5-4l7.5 4v4.8");
}
</style><g class="ulnmmdpxh"><path class="yp8j4bb2q"/><path class="rwafh7bnk"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:package-update",
	});
}

export default Component;
