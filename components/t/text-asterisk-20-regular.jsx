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
		"content": `<style>.doo6irn6f {
  fill: currentColor;
  d: path("M10.5 2.5a.5.5 0 0 0-1 0v6.293l-4.45-4.45a.5.5 0 1 0-.707.707l4.45 4.45H2.5a.5.5 0 0 0 0 1h6.293l-4.45 4.45a.5.5 0 1 0 .707.707l4.45-4.45V17.5a.5.5 0 0 0 1 0v-6.293l4.45 4.45a.5.5 0 1 0 .707-.707l-4.45-4.45H17.5a.5.5 0 0 0 0-1h-6.293l4.45-4.45a.5.5 0 1 0-.707-.707l-4.45 4.45z");
}
</style><path class="doo6irn6f"/>`,
		"fallback": "fluent:text-asterisk-20-regular",
	});
}

export default Component;
