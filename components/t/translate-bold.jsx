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
		"content": `<style>.cc4amnq8y {
  fill: currentColor;
  d: path("m250.73 210.63l-56-112a12 12 0 0 0-21.46 0l-20.52 41A84.2 84.2 0 0 1 114 126.22A107.5 107.5 0 0 0 139.33 68H160a12 12 0 0 0 0-24h-52V32a12 12 0 0 0-24 0v12H32a12 12 0 0 0 0 24h83.13A83.7 83.7 0 0 1 96 110.35A84 84 0 0 1 83.6 91a12 12 0 1 0-21.81 10A107.6 107.6 0 0 0 78 126.24A83.54 83.54 0 0 1 32 140a12 12 0 0 0 0 24a107.47 107.47 0 0 0 64-21.07a108.4 108.4 0 0 0 45.39 19.44l-24.13 48.26a12 12 0 1 0 21.46 10.73L151.41 196h65.17l12.68 25.36a12 12 0 1 0 21.47-10.73M163.41 172L184 130.83L204.58 172Z");
}
</style><path class="cc4amnq8y"/>`,
		"fallback": "ph:translate-bold",
	});
}

export default Component;
