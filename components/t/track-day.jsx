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
		"content": `<style>.i77utvbxh {
  d: path("M16 21.5v-7h5.5V19H16m2.75-4.5V19M16 16.75h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xujgw5omt {
  d: path("M13.2 21H3V4.5h18v7.2M3 9.5h18m-13-7v4m8-4v4");
}
</style><g class="ulnmmdpxh"><path class="xujgw5omt"/><path class="i77utvbxh"/></g>`,
		"fallback": "uix-sharp:track-day",
	});
}

export default Component;
