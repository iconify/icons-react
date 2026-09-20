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
		"content": `<style>.r5mxzubru {
  fill: currentColor;
  d: path("M5.5 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0zm14.5 0a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0zm-7.25 0a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0zm-1.5 11a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-1.5 0zm0 4a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0z");
}
</style><path class="r5mxzubru"/>`,
		"fallback": "fluent:road-24-regular",
	});
}

export default Component;
