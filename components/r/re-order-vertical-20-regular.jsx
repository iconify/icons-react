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
		"content": `<style>.gjn4g4bwv {
  fill: currentColor;
  d: path("M8 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0zm3 0a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0z");
}
</style><path class="gjn4g4bwv"/>`,
		"fallback": "fluent:re-order-vertical-20-regular",
	});
}

export default Component;
