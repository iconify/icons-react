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
		"content": `<style>.r6f9x3wzd {
  fill: currentColor;
  d: path("M16.5 8a.5.5 0 0 1 .5.5V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8.5a.5.5 0 0 1 .5-.5zm0-5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1z");
}
</style><path class="r6f9x3wzd"/>`,
		"fallback": "fluent:layout-add-above-20-filled",
	});
}

export default Component;
