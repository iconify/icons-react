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
		"content": `<style>.n_i9trz4k {
  fill: currentColor;
  d: path("M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20H5.25A3.25 3.25 0 0 1 2 16.75zm3 6c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75m10.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM5 16.25c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75m6.75-.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="n_i9trz4k"/>`,
		"fallback": "fluent:subtitles-24-filled",
	});
}

export default Component;
