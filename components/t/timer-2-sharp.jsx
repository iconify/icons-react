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
		"content": `<style>.cieqqnjqe {
  fill: currentColor;
  d: path("M8 19v-8.5h6V8H8V5h9v8.5h-6V16h6v3z");
}
</style><path class="cieqqnjqe"/>`,
		"fallback": "material-symbols:timer-2-sharp",
	});
}

export default Component;
