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
		"content": `<style>.yu0djzbiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 9.5a5.25 5.25 0 0 1 10.5 0M12 4.25v-1.5M2.75 9.5h18.5m-15.5 3V18m4-5.5V18m4.5-5.5V18m4-5.5V18m-15.5 2.75h18.5");
}
</style><path class="yu0djzbiv"/>`,
		"fallback": "iconoven:university-sharp",
	});
}

export default Component;
