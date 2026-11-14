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
		"content": `<style>.bcnjt0r8l {
  d: path("M12.2 20.5H2.5v-17h19v11.3m-19-7.05h19");
}

.ge6cvbb7b {
  d: path("M7 10.5L4.5 13L7 15.5m3.5-5.5l-1.75 6M15 14.5l6.5 3.5l-6.5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bcnjt0r8l"/><path class="ge6cvbb7b"/></g>`,
		"fallback": "uix-sharp:query-run",
	});
}

export default Component;
