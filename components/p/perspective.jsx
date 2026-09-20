import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ex_b6pbfe {
  fill: currentColor;
  d: path("M240 120h-16V48a16 16 0 0 0-18.86-15.74l-160 29.09A16 16 0 0 0 32 77.09V120H16a8 8 0 0 0 0 16h16v42.91a16 16 0 0 0 13.14 15.74l160 29.09a16.5 16.5 0 0 0 2.86.26a16 16 0 0 0 16-16v-72h16a8 8 0 0 0 0-16M48 77.09L208 48v72H48ZM208 208L48 178.91V136h160Z");
}
</style><path class="ex_b6pbfe"/>`,
		"fallback": "ph:perspective",
	});
}

export default Component;
