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
		"content": `<style>.zhe0kobcb {
  fill: currentColor;
  d: path("M20.25 19.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zM17.75 3A3.25 3.25 0 0 1 21 6.25v8a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-8A3.25 3.25 0 0 1 6.25 3z");
}
</style><path class="zhe0kobcb"/>`,
		"fallback": "fluent:layout-add-below-24-filled",
	});
}

export default Component;
