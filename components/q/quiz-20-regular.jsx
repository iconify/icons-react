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
		"content": `<style>.m8ppt2xmc {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm8.5 10a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM8 5a.5.5 0 0 1 .457.297l2 4.5a.5.5 0 1 1-.914.406L9.009 9H6.99l-.534 1.203a.5.5 0 0 1-.914-.406l2-4.5A.5.5 0 0 1 8 5m5 0a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1A.5.5 0 0 1 13 5M7.437 8h1.126L8 6.731z");
}
</style><path class="m8ppt2xmc"/>`,
		"fallback": "fluent:quiz-20-regular",
	});
}

export default Component;
