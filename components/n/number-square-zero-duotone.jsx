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

.rl1dq4bco {
  d: path("M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w-0jfubhm {
  d: path("M128 72c-14.23 0-26 6.44-34 18.61c-6.47 9.86-10 23.14-10 37.39s3.56 27.53 10 37.39c8 12.17 19.74 18.61 34 18.61s26-6.44 34-18.61c6.47-9.86 10-23.14 10-37.39s-3.56-27.53-10-37.39C154 78.44 142.23 72 128 72m0 96c-22.1 0-28-25.14-28-40s5.9-40 28-40s28 25.14 28 40s-5.9 40-28 40m80-136H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160z");
}
</style><g class="cuyn6tgcc"><path class="rl1dq4bco"/><path class="w-0jfubhm"/></g>`,
		"fallback": "ph:number-square-zero-duotone",
	});
}

export default Component;
