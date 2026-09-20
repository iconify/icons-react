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
		"content": `<style>.f79eelrrj {
  fill: currentColor;
  d: path("M3.5 5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm0 7h7.002l.416-1H3.5a.5.5 0 0 0 0 1m8.668-4l-.416 1H3.5a.5.5 0 0 1 0-1zm-.667 6.012h1.75l-.59 2.363c-.121.485.462.828.826.488l4.873-4.556c.497-.466.169-1.301-.512-1.301H16.75l.781-2.347a.5.5 0 0 0-.474-.659h-3.473a.5.5 0 0 0-.462.308l-2.083 5.01a.5.5 0 0 0 .462.694");
}
</style><path class="f79eelrrj"/>`,
		"fallback": "fluent:text-column-one-wide-lightning-20-regular",
	});
}

export default Component;
