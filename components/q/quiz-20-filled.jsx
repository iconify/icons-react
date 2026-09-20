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
		"content": `<style>.yw-g21qfh {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM5.5 14a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0-2a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM8 5a.5.5 0 0 0-.457.297l-2 4.5a.5.5 0 0 0 .914.406L6.991 9H9.01l.534 1.203a.5.5 0 0 0 .914-.406l-2-4.5A.5.5 0 0 0 8 5m5 0a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1A.5.5 0 0 0 13 5M8.563 8H7.437L8 6.731z");
}
</style><path class="yw-g21qfh"/>`,
		"fallback": "fluent:quiz-20-filled",
	});
}

export default Component;
