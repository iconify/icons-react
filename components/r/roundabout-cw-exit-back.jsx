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
		"content": `<style>.f0rzsfblj {
  d: path("M12.75 19.25L15 21.5l2.25-2.25");
}

.pfj6r7b0d {
  d: path("M9 21.5V14a5 5 0 1 1 6 0v7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pfj6r7b0d"/><path class="f0rzsfblj"/></g>`,
		"fallback": "uix-sharp:roundabout-cw-exit-back",
	});
}

export default Component;
