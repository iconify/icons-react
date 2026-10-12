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
		"content": `<style>.j6onhwrxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.25h18.5v5H2.75zm2 2.5h14.5M12 3v4.5m0 0l-6.5 5.75M12 7.5l6.5 5.75");
}
</style><path class="j6onhwrxt"/>`,
		"fallback": "iconoven:steel-beam-sharp",
	});
}

export default Component;
