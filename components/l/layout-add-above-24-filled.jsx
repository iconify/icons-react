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
		"content": `<style>.g3mj-_bvi {
  fill: currentColor;
  d: path("M20.25 9a.75.75 0 0 1 .75.75v8A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75v-8A.75.75 0 0 1 3.75 9zm0-6a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="g3mj-_bvi"/>`,
		"fallback": "fluent:layout-add-above-24-filled",
	});
}

export default Component;
