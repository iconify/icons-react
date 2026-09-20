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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.w8985q_4s {
  d: path("M168 100a60 60 0 1 1-60-60a60 60 0 0 1 60 60");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x8p88ibjf {
  d: path("M144 157.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 0 0 12.25 10.3C50.25 181.19 77.91 168 108 168s57.75 13.19 77.87 37.15a8 8 0 0 0 12.25-10.3c-14.94-17.78-33.52-30.41-54.12-37.17M56 100a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52m197.66 33.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L216 148.69l26.34-26.35a8 8 0 0 1 11.32 11.32");
}
</style><g class="cuyn6tgcc"><path class="w8985q_4s"/><path class="x8p88ibjf"/></g>`,
		"fallback": "ph:user-check-duotone",
	});
}

export default Component;
