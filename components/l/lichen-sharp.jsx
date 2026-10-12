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
		"content": `<style>.jf6va4a7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25c0-3 2.5-5.25 5.5-5.25h7.5c3 0 5.5 2.25 5.5 5.25v1H2.75zM6.5 15.3V13m0 0L5 10.75M6.5 13L8 10.75M12 15v-3.5m0 0L10.25 9M12 11.5L13.75 9m3.75 6.3v-1.8m0 0L16 11.25m1.5 2.25l1.5-2.25");
}
</style><path class="jf6va4a7j"/>`,
		"fallback": "iconoven:lichen-sharp",
	});
}

export default Component;
