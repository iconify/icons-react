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
		"content": `<style>.c26fz6bgi {
  fill: currentColor;
  d: path("M245.41 173.4A6 6 0 0 0 240 170h-98v-28h74a6 6 0 0 0 4.44-10L142 45.68V8a6 6 0 0 0-10.66-3.78l-104 128A6 6 0 0 0 32 142h98v28H16a6 6 0 0 0-4.69 9.75l29.6 37A14 14 0 0 0 51.84 222h152.32a14 14 0 0 0 10.93-5.25l29.6-37a6 6 0 0 0 .72-6.35m-43-43.4H142V63.52Zm-157.8 0L130 24.9V130Zm161.11 79.25a2 2 0 0 1-1.56.75H51.84a2 2 0 0 1-1.56-.75L28.48 182h199Z");
}
</style><path class="c26fz6bgi"/>`,
		"fallback": "ph:sailboat-light",
	});
}

export default Component;
