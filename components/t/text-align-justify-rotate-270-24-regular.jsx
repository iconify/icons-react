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
		"content": `<style>.ssy0l0p5m {
  fill: currentColor;
  d: path("M5.75 22a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-.75.75m13 0a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-.75.75m-7.25-.75a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0z");
}
</style><path class="ssy0l0p5m"/>`,
		"fallback": "fluent:text-align-justify-rotate-270-24-regular",
	});
}

export default Component;
