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
		"content": `<style>.yrapopj4k {
  fill: currentColor;
  d: path("M5.05 4.05a7 7 0 0 1 9.9 0a7.006 7.006 0 0 1 0 9.905l-1.128 1.114l-2.435 2.37a1.994 1.994 0 0 1-2.64.118l-.133-.118l-2.043-1.985l-1.52-1.499a7.006 7.006 0 0 1 0-9.904M10 6.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5");
}
</style><path class="yrapopj4k"/>`,
		"fallback": "fluent:location-20-filled",
	});
}

export default Component;
