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
		"content": `<style>.sswz01bon {
  fill: currentColor;
  d: path("M11.354 2.146a.5.5 0 0 0-.707 0l-3 3a.5.5 0 1 0 .707.708L10.5 3.707V11.5a.5.5 0 0 0 1 0V3.707l2.146 2.147a.5.5 0 1 0 .708-.708zM14.732 17A2 2 0 0 1 13 18H7a4 4 0 0 1-4-4v-3.5a.5.5 0 0 1 1 0V14a3 3 0 0 0 3 3zM16 8.5a.5.5 0 0 1 1 0V14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8.5a.5.5 0 0 1 1 0V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z");
}
</style><path class="sswz01bon"/>`,
		"fallback": "fluent:send-copy-20-regular",
	});
}

export default Component;
