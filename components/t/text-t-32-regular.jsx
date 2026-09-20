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
		"content": `<style>.a7qsij1qn {
  fill: currentColor;
  d: path("M6 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6h-7v20h2a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h2V6H8v3a1 1 0 0 1-2 0z");
}
</style><path class="a7qsij1qn"/>`,
		"fallback": "fluent:text-t-32-regular",
	});
}

export default Component;
