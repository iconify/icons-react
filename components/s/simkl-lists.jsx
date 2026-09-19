import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n13m6sqdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.656 29.781h9.25c0 3.47 1.156 3.47 8.094 3.47c8.094 0 9.25 0 9.25-3.47c0-2.312-1.156-2.312-9.25-2.312c-17.344 0-18.5-1.156-18.5-9.25C5.5 8.969 6.656 7.83 24 7.813s18.5 1.156 18.5 10.406h-9.25c0-3.469-1.156-3.498-9.25-3.498s-9.25.03-9.25 3.498c0 2.312 1.156 2.312 9.25 2.312c17.344 0 18.5 1.157 18.5 9.25c0 9.25-1.156 10.407-18.5 10.407c-16.187 0-17.344-1.157-17.344-10.407");
}
</style><path class="n13m6sqdp"/>`,
		"fallback": "arcticons:simkl-lists",
	});
}

export default Component;
