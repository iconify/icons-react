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
		"content": `<style>.bx105ub0a {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M7 8c0-.55.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1m0 3c0-.55.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1m3 3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1m8.29.12l-3.54 3.54a.996.996 0 0 1-1.41 0l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71l2.83-2.83a.996.996 0 0 1 1.41 0c.39.38.39 1.01 0 1.4");
}
</style><path class="bx105ub0a"/>`,
		"fallback": "ic:round-playlist-add-check-circle",
	});
}

export default Component;
