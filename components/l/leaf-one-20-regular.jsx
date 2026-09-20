import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bjz5kgb1x {
  fill: currentColor;
  d: path("m11.072 2.458l3.239 3.31A6.03 6.03 0 0 1 10.5 15.995v1.503a.5.5 0 1 1-1 0v-1.504A6.03 6.03 0 0 1 5.69 5.768l3.238-3.31a1.5 1.5 0 0 1 2.144 0M10.5 14.99a5.03 5.03 0 0 0 3.096-8.523l-3.239-3.31a.5.5 0 0 0-.714 0l-3.239 3.31A5.03 5.03 0 0 0 9.5 14.99V9.498a.5.5 0 1 1 1 0z");
}
</style><path class="bjz5kgb1x"/>`,
		"fallback": "fluent:leaf-one-20-regular",
	});
}

export default Component;
