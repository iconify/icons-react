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
		"content": `<style>.ro9ouknln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.37 3.83l1.01-.66l.62-.42l.6.45l.8.6l.6.45l.6-.45l.8-.6l.6-.45l.6.45l.8.6l.6.45l.6-.45l.8-.6l.6-.45l.62.42l1.01.66l.62.42l.02.75l.46 15.5l.02.75H5.25l.02-.75L5.73 5l.02-.75zm-.72 3.92h12.7m-6.35 0v3");
}
</style><path class="ro9ouknln"/>`,
		"fallback": "iconoven:takeout-box-sharp",
	});
}

export default Component;
