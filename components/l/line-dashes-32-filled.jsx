import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.frtglcbsk {
  fill: currentColor;
  d: path("M28.634 3.366a1.25 1.25 0 0 1 0 1.768l-.98.979a1.25 1.25 0 1 1-1.767-1.768l.98-.979a1.25 1.25 0 0 1 1.767 0m-4.896 4.896a1.25 1.25 0 0 1 0 1.768l-1.958 1.958a1.25 1.25 0 1 1-1.768-1.768l1.958-1.958a1.25 1.25 0 0 1 1.768 0m-5.875 5.875a1.25 1.25 0 0 1 0 1.768l-1.958 1.958a1.25 1.25 0 1 1-1.768-1.768l1.958-1.958a1.25 1.25 0 0 1 1.768 0m-5.875 5.875a1.25 1.25 0 0 1 0 1.768l-1.958 1.958a1.25 1.25 0 0 1-1.768-1.768l1.958-1.958a1.25 1.25 0 0 1 1.768 0m-5.875 5.875a1.25 1.25 0 0 1 0 1.768l-.98.979a1.25 1.25 0 0 1-1.767-1.768l.98-.98a1.25 1.25 0 0 1 1.767 0");
}
</style><path class="frtglcbsk"/>`,
		"fallback": "fluent:line-dashes-32-filled",
	});
}

export default Component;
