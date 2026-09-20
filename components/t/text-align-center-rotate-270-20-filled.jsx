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
		"content": `<style>.v5hm9ibup {
  fill: currentColor;
  d: path("M4.25 16a.75.75 0 0 1-.75-.75V4.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-.75.75m5 2a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-.75.75m4.25-4.75a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-1.5 0z");
}
</style><path class="v5hm9ibup"/>`,
		"fallback": "fluent:text-align-center-rotate-270-20-filled",
	});
}

export default Component;
