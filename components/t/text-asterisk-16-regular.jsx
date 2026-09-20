import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n17fpiw8j {
  fill: currentColor;
  d: path("M13.5 7.5H9.207l3.036-3.036a.5.5 0 0 0-.707-.707L8.5 6.793V2.5a.5.5 0 0 0-1 0v4.293L4.464 3.757a.5.5 0 0 0-.707.707L6.793 7.5H2.5a.5.5 0 0 0 0 1h4.293l-3.036 3.036a.5.5 0 0 0 .708.707l3.036-3.036V13.5a.5.5 0 0 0 1 0V9.207l3.036 3.036a.5.5 0 0 0 .708 0a.5.5 0 0 0 0-.707L9.209 8.5h4.293a.5.5 0 0 0 0-1z");
}
</style><path class="n17fpiw8j"/>`,
		"fallback": "fluent:text-asterisk-16-regular",
	});
}

export default Component;
