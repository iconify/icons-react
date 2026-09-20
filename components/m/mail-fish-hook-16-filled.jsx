import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m3u1obcwd {
  fill: currentColor;
  d: path("M9.5 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m2 1A2 2 0 0 1 10 4.937V7a2 2 0 1 0 4 0h-1.5a.5.5 0 0 1-.354-.854l2-2A.5.5 0 0 1 15 4.5V7a3 3 0 1 1-6 0V4.937A2 2 0 1 1 11.5 3m-5 0H4a2 2 0 0 0-2 2v.201l6 3.231l.22-.119A4 4 0 0 1 8 7V5.599A3 3 0 0 1 6.5 3m2.165 6.21A3.996 3.996 0 0 0 14 10.465V11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.337L7.763 9.44a.5.5 0 0 0 .474 0z");
}
</style><path class="m3u1obcwd"/>`,
		"fallback": "fluent:mail-fish-hook-16-filled",
	});
}

export default Component;
