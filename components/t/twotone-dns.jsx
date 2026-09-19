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
		"content": `<style>.t9tohgx0q {
  fill: currentColor;
  d: path("M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1m-1 6H5v-4h14zm-12-.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1 6H5V5h14zM7 8.5c.83 0 1.5-.67 1.5-1.5S7.83 5.5 7 5.5S5.5 6.17 5.5 7S6.17 8.5 7 8.5");
}

.va1dd-bps {
  fill: currentColor;
  d: path("M5 9h14V5H5zm2-3.5c.83 0 1.5.67 1.5 1.5S7.83 8.5 7 8.5S5.5 7.83 5.5 7S6.17 5.5 7 5.5M5 19h14v-4H5zm2-3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="va1dd-bps"/><path class="t9tohgx0q"/>`,
		"fallback": "ic:twotone-dns",
	});
}

export default Component;
