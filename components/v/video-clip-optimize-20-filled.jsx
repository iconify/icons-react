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
		"content": `<style>.ni-uue3fp {
  fill: currentColor;
  d: path("M3 6.5A3.5 3.5 0 0 1 6.5 3a.5.5 0 0 0 0-1A4.5 4.5 0 0 0 2 6.5a.5.5 0 0 0 1 0M4 7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm2.5 10A3.5 3.5 0 0 1 3 13.5a.5.5 0 0 0-1 0A4.5 4.5 0 0 0 6.5 18a.5.5 0 0 0 0-1M17 6.5A3.5 3.5 0 0 0 13.5 3a.5.5 0 0 1 0-1A4.5 4.5 0 0 1 18 6.5a.5.5 0 0 1-1 0M13.5 17a3.5 3.5 0 0 0 3.5-3.5a.5.5 0 0 1 1 0a4.5 4.5 0 0 1-4.5 4.5a.5.5 0 0 1 0-1M8.258 7.063A.5.5 0 0 0 8 7.5v5.15a.5.5 0 0 0 .776.417l4-2.649a.5.5 0 0 0-.01-.84l-4-2.502a.5.5 0 0 0-.508-.013");
}
</style><path class="ni-uue3fp"/>`,
		"fallback": "fluent:video-clip-optimize-20-filled",
	});
}

export default Component;
