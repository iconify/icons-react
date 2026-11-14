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
		"content": `<style>.r2iid5bbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 18.5h16l-2.5 3h-11ZM8 3v15.5M8 3c5-1.5 13 0 13 6.5c0 4.5-4 6-8 6c-2 0-3.5-1-5-2.5");
}
</style><path class="r2iid5bbh"/>`,
		"fallback": "uix-sharp:sail-spinnaker",
	});
}

export default Component;
