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
		"content": `<style>.egpx55bhq {
  d: path("M13 14H4V3.5h15v8.1M2.5 17h10.2");
}

.j_7hyfb9l {
  d: path("M7.5 7.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-1.25 4c0-1.25 1.25-2 2.75-2s2.75.75 2.75 2M15.5 16c0-1.25 1-1.75 2.25-1.75s2.25.75 2.25 2c0 1.5-2 2.5-4.5 5.25h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="egpx55bhq"/><path class="j_7hyfb9l"/></g>`,
		"fallback": "uix-sharp:second-opinion-online",
	});
}

export default Component;
