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
		"content": `<style>.a-lewl9ke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 19v-7a2 2 0 0 0-2-2h-33a2 2 0 0 0-2 2v7a5 5 0 0 1 0 10v7a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-7a5 5 0 0 1 0-10m-18.453.5v9m3.269-9l5.962 9m0-9l-5.962 9m-12.594-9h5.962m-2.981 9v-9");
}
</style><path class="a-lewl9ke"/>`,
		"fallback": "arcticons:tix-id",
	});
}

export default Component;
