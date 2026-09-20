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
		"content": `<style>.wdhd96bxm {
  fill: currentColor;
  d: path("M6 5.25C6 4.56 6.56 4 7.25 4h17.5c.69 0 1.25.56 1.25 1.25v3.5a1.25 1.25 0 1 1-2.5 0V6.5h-6.25v19h1.5a1.25 1.25 0 1 1 0 2.5h-5.5a1.25 1.25 0 1 1 0-2.5h1.5v-19H8.5v2.25a1.25 1.25 0 1 1-2.5 0z");
}
</style><path class="wdhd96bxm"/>`,
		"fallback": "fluent:text-t-32-filled",
	});
}

export default Component;
