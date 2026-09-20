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
		"content": `<style>.u5kciwzrp {
  fill: currentColor;
  d: path("M3.75 2.75A.75.75 0 0 1 4.5 2h1.313a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75m3.938 0a.75.75 0 0 1 .75-.75h2.624a.75.75 0 0 1 0 1.5H8.439a.75.75 0 0 1-.75-.75m5.25 0a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.312a.75.75 0 0 1-.75-.75M3.75 17.25a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75m6.53-12.53a.75.75 0 0 0-1.06 0L4.97 8.97a.75.75 0 1 0 1.06 1.06L9 7.06v7.19a.75.75 0 0 0 1.5 0V7.06l2.97 2.97a.75.75 0 1 0 1.06-1.06z");
}
</style><path class="u5kciwzrp"/>`,
		"fallback": "fluent:padding-top-20-filled",
	});
}

export default Component;
