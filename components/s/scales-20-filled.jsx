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
		"content": `<style>.nfvhrvdiv {
  fill: currentColor;
  d: path("M3.5 3a.5.5 0 1 0 0 1h.75L2.077 9.215a1 1 0 0 0-.075.405a3 3 0 0 0 5.996 0a1 1 0 0 0-.075-.405L5.75 4H9.5v11h-4a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3h-4V4h3.75l-2.173 5.215a1 1 0 0 0-.075.405a3 3 0 0 0 5.996 0a1 1 0 0 0-.075-.405L15.75 4h.75a.5.5 0 0 0 0-1zM5 4.8L6.75 9h-3.5zM16.75 9h-3.5L15 4.8z");
}
</style><path class="nfvhrvdiv"/>`,
		"fallback": "fluent:scales-20-filled",
	});
}

export default Component;
