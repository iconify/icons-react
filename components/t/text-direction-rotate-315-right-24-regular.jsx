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
		"content": `<style>.ix04_g7nd {
  fill: currentColor;
  d: path("M10.5 2.75c0 .414.336.75.75.75h1.19L8.22 7.72a.75.75 0 0 0 1.06 1.06l4.22-4.22v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75M3.071 8.072a.75.75 0 0 0-.999 1l4.5 9.498a.75.75 0 0 0 1.356-.642l-1.22-2.575l2.645-2.645l2.576 1.22a.75.75 0 0 0 .642-1.356zm4.843 3.954l-1.888 1.887l-1.699-3.586zM18.25 9a.75.75 0 0 0 0 1.5h1.19L9.22 20.72a.75.75 0 1 0 1.06 1.06L20.5 11.56v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75z");
}
</style><path class="ix04_g7nd"/>`,
		"fallback": "fluent:text-direction-rotate-315-right-24-regular",
	});
}

export default Component;
