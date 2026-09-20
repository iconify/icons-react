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
		"content": `<style>.dgz3ncbra {
  fill: currentColor;
  d: path("M15.5 3A3.5 3.5 0 0 1 19 6.5v19a3.5 3.5 0 1 1-7 0v-19A3.5 3.5 0 0 1 15.5 3m0 1A2.5 2.5 0 0 0 13 6.5v19a2.5 2.5 0 0 0 5 0v-19A2.5 2.5 0 0 0 15.5 4M29 12.5v13a3.5 3.5 0 1 1-7 0v-13a3.5 3.5 0 1 1 7 0M25.5 10a2.5 2.5 0 0 0-2.5 2.5v13a2.5 2.5 0 0 0 5 0v-13a2.5 2.5 0 0 0-2.5-2.5M9 25.5v-7a3.5 3.5 0 1 0-7 0v7a3.5 3.5 0 1 0 7 0m-6-7a2.5 2.5 0 0 1 5 0v7a2.5 2.5 0 0 1-5 0z");
}
</style><path class="dgz3ncbra"/>`,
		"fallback": "fluent:poll-32-light",
	});
}

export default Component;
