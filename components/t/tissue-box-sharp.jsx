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
		"content": `<style>.lvvfq53pb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.75h18.5v9.5H2.75zm0 3h18.5m-13-3c-1-2.75.5-5.5 3-6.25V3.143L14 2.75l-.385 2.308L16 6.25c-1.25 1.25-1.5 3.5-.75 5.5");
}
</style><path class="lvvfq53pb"/>`,
		"fallback": "iconoven:tissue-box-sharp",
	});
}

export default Component;
