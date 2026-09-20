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
		"content": `<style>.f2czd9b9j {
  fill: currentColor;
  d: path("M35.46 10.773c-6.876-5.969-17.297-5.684-23.834.853s-6.822 16.959-.853 23.833zm1.767 1.768L12.541 37.227c6.875 5.969 17.296 5.684 23.833-.853s6.822-16.958.853-23.833M9.857 9.858c7.811-7.81 20.475-7.81 28.285 0s7.81 20.474 0 28.284s-20.474 7.81-28.284 0s-7.81-20.474 0-28.284");
}
</style><path class="f2czd9b9j"/>`,
		"fallback": "fluent:prohibited-48-regular",
	});
}

export default Component;
