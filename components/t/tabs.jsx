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
		"content": `<style>.ecj0twbuv {
  fill: currentColor;
  d: path("M255.66 165.7a.2.2 0 0 0 0-.08L233.37 91.4A15.89 15.89 0 0 0 218.05 80H208a8 8 0 0 0 0 16h10.05l19.2 64H206l-20.63-68.6A15.89 15.89 0 0 0 170.05 80H160a8 8 0 0 0 0 16h10.05l19.2 64H158l-20.63-68.6A15.89 15.89 0 0 0 122.05 80H38a15.89 15.89 0 0 0-15.37 11.4L.37 165.6v.13A8.1 8.1 0 0 0 0 168a8 8 0 0 0 8 8h240a8 8 0 0 0 7.66-10.3M38 96h84.1l19.2 64H18.75Z");
}
</style><path class="ecj0twbuv"/>`,
		"fallback": "ph:tabs",
	});
}

export default Component;
