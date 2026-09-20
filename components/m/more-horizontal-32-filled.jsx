import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qf2c3kgra {
  fill: currentColor;
  d: path("M7 19a3 3 0 1 0 0-6a3 3 0 0 0 0 6m9 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6m9 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><path class="qf2c3kgra"/>`,
		"fallback": "fluent:more-horizontal-32-filled",
	});
}

export default Component;
