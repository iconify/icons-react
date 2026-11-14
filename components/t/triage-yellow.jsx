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
		"content": `<style>.eeelanbur {
  d: path("m12 4l5.5 4v11.5c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V8Zm0 4l4-5.5");
}

.r8vc15d9l {
  d: path("M10.75 8a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM10 13.25c0-1 .9-1.75 2-1.75s2 .75 2 1.75C14 15 10 16 10 18.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eeelanbur"/><path class="r8vc15d9l"/></g>`,
		"fallback": "uix-sharp:triage-yellow",
	});
}

export default Component;
