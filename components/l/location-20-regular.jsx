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
		"content": `<style>.as045lbox {
  fill: currentColor;
  d: path("M5.05 4.051a7 7 0 0 1 9.9 0a7.005 7.005 0 0 1 0 9.904l-1.128 1.114l-2.436 2.37a1.993 1.993 0 0 1-2.64.117l-.132-.117l-2.043-1.985l-1.52-1.5a7.005 7.005 0 0 1 0-9.903m9.195.705a6 6 0 0 0-8.49 0a6.01 6.01 0 0 0-.175 8.311l.175.183l.57.567l2.982 2.905l.093.08a1 1 0 0 0 1.2 0l.093-.08l2.23-2.168l1.322-1.304l.176-.183a6.01 6.01 0 0 0-.176-8.31M10 6.25a2.75 2.75 0 1 1-.001 5.5a2.75 2.75 0 0 1 0-5.5m0 1a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5");
}
</style><path class="as045lbox"/>`,
		"fallback": "fluent:location-20-regular",
	});
}

export default Component;
