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
		"content": `<style>.i34hylb0w {
  fill: currentColor;
  d: path("M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m3.23 15.39L12 15.45l-3.22 1.94a.502.502 0 0 1-.75-.54l.85-3.66l-2.83-2.45a.505.505 0 0 1 .29-.88l3.74-.32l1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44l3.74.32a.5.5 0 0 1 .28.88l-2.83 2.45l.85 3.67c.1.43-.36.77-.74.54");
}
</style><path class="i34hylb0w"/>`,
		"fallback": "ic:round-stars",
	});
}

export default Component;
