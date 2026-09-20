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
		"content": `<style>.si0ttcbyj {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8 4.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9");
}
</style><path class="si0ttcbyj"/>`,
		"fallback": "fluent:record-20-filled",
	});
}

export default Component;
