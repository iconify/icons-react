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
		"content": `<style>.j7e0p2chq {
  d: path("M3.5 21.5V13H9V9.5h6V13h5.5v8.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu-2ln_fl {
  d: path("M10.25 21.5v-4h3.5v4M12 6.75V2.5M9.5 5L12 2.5L14.5 5");
}
</style><g class="ulnmmdpxh"><path class="j7e0p2chq"/><path class="vu-2ln_fl"/></g>`,
		"fallback": "uix-sharp:profit-center",
	});
}

export default Component;
