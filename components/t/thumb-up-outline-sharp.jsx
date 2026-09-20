import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e3nyhxbrb {
  fill: currentColor;
  d: path("M7 21V8l7-7l1.85 1.85L14.55 8H23v4.4L19.35 21zm2-2h9l3-7v-2h-9l1.35-5.5L9 8.85zM9 8.85V19zM2 21V8h5v2H4v9h3v2z");
}
</style><path class="e3nyhxbrb"/>`,
		"fallback": "material-symbols:thumb-up-outline-sharp",
	});
}

export default Component;
