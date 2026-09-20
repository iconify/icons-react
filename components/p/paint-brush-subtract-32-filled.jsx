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
		"content": `<style>.j4misj8rp {
  fill: currentColor;
  d: path("M17 2v5a1 1 0 1 0 2 0V2h2v7a1 1 0 1 0 2 0V2h2a1 1 0 0 1 1 1v11H6V3a1 1 0 0 1 1-1zm-3 21a8.98 8.98 0 0 1 3.343-7H6v2.75A3.25 3.25 0 0 0 9.25 22H12v4a4 4 0 0 0 5.144 3.834A8.98 8.98 0 0 1 14 23m16.5 0a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0M18 22.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75");
}
</style><path class="j4misj8rp"/>`,
		"fallback": "fluent:paint-brush-subtract-32-filled",
	});
}

export default Component;
