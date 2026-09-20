import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":254};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t7o50ac7n {
  fill: var(--svg-color--1c70e7, #1C70E7);
  d: path("M79.072 0h99.949l-4.8 59.502l48.787-20.443l32.991 92.658l-54.412 15.811l34.125 46.375l-79.315 59.195l-30.475-47.422l-29.579 47.422l-80.947-59.195l38.287-46.375L0 131.717l30.366-92.658L82.67 59.502z");
}

.ypi96owdx {
  fill: var(--svg-color--fff, #FFF);
  d: path("M107.425 27.406h41.87l-3.593 72.851l61.349-25.183l14.58 38.507l-65.354 18.819l41.459 56.94l-33.208 24.798l-39.275-59.571l-36.238 59.571l-34.741-24.798l45.753-56.94l-66.045-18.819l13.34-38.507l64.504 25.183z");
}
</style><path class="t7o50ac7n"/><path class="ypi96owdx"/>`,
		"fallback": "logos:web-fundamentals",
	});
}

export default Component;
