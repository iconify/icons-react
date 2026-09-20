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
		"content": `<style>.jxl_aabpi {
  fill: currentColor;
  d: path("M21.896 4.042c.467-1.213-.725-2.405-1.938-1.938L2.962 8.64c-1.36.522-1.252 2.48.156 2.85l7.011 1.845a.75.75 0 0 1 .535.535l1.845 7.01c.37 1.409 2.328 1.516 2.85.157z");
}
</style><path class="jxl_aabpi"/>`,
		"fallback": "fluent:location-arrow-24-filled",
	});
}

export default Component;
