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
		"content": `<style>.vthznzunq {
  fill: currentColor;
  d: path("M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20h-6.275l-2.05-2.05A5.5 5.5 0 0 0 2 11.257zM5.5 20a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 5.5 20m0-1.5a3 3 0 1 1 0-6a3 3 0 0 1 0 6");
}
</style><path class="vthznzunq"/>`,
		"fallback": "fluent:screen-search-24-filled",
	});
}

export default Component;
