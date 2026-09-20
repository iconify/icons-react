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
		"content": `<style>.f-y8ybh3b {
  fill: currentColor;
  d: path("M5 4.5A1.5 1.5 0 0 1 6.5 3h3.88c2.364 0 4.12 1.934 4.12 4.12c0 .819-.247 1.606-.68 2.269c.842.749 1.427 1.849 1.427 3.241c0 2.775-2.318 4.37-4.367 4.37H6.5A1.5 1.5 0 0 1 5 15.5zM8 6v2.25h2.38c.625 0 1.12-.516 1.12-1.13A1.12 1.12 0 0 0 10.38 6zm0 5.25V14h2.88a1.36 1.36 0 0 0 1.367-1.37c0-.84-.684-1.38-1.367-1.38z");
}
</style><path class="f-y8ybh3b"/>`,
		"fallback": "fluent:text-bold-20-filled",
	});
}

export default Component;
