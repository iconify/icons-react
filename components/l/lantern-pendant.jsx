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
		"content": `<style>.q5pdufz1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V6m-4.5 4.5L12 6l4.5 4.5Zm1 0l1 10h5l1-10m-3.5 3v4");
}
</style><path class="q5pdufz1i"/>`,
		"fallback": "uix-sharp:lantern-pendant",
	});
}

export default Component;
