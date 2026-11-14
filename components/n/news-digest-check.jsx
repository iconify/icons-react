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
		"content": `<style>.rr188kb9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.3 19.5H3v-17h16.5v10.8M3 7.5h16.5m-13 4H15m-8.5 4H11m3.75 2.5l2 2L21 15.75");
}
</style><path class="rr188kb9p"/>`,
		"fallback": "uix-sharp:news-digest-check",
	});
}

export default Component;
