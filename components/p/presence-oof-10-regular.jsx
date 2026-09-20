import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x7sajubzb {
  fill: currentColor;
  d: path("M5.349 3.85a.5.5 0 1 0-.708-.706l-1.497 1.5a.5.5 0 0 0 0 .707l1.497 1.5a.5.5 0 1 0 .708-.707l-.646-.646h1.8a.5.5 0 1 0 0-1h-1.8zM4.998 0a4.998 4.998 0 1 0 0 9.995a4.998 4.998 0 0 0 0-9.995M1 4.998a3.998 3.998 0 1 1 7.995 0a3.998 3.998 0 0 1-7.995 0");
}
</style><path class="x7sajubzb"/>`,
		"fallback": "fluent:presence-oof-10-regular",
	});
}

export default Component;
