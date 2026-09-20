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
		"content": `<style>.p6w74s7fo {
  fill: currentColor;
  d: path("M4.757 4.757a6 6 0 0 1 8.118-.339l-8.457 8.457a6 6 0 0 1 .34-8.118m.368 8.825l8.457-8.457a6 6 0 0 1-8.457 8.457M13.95 4.05a7 7 0 1 0-9.9 9.9a7 7 0 0 0 9.9-9.9M17 9c0 1.37-.344 2.66-.95 3.786a6.02 6.02 0 0 1-3.264 3.263A8 8 0 0 1 9 17a8 8 0 0 1-1.382-.119a7 7 0 0 0 9.263-9.263Q17 8.292 17 9");
}
</style><path class="p6w74s7fo"/>`,
		"fallback": "fluent:prohibited-multiple-20-regular",
	});
}

export default Component;
