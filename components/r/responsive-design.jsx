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
		"content": `<style>.nicb36bun {
  d: path("M15.5 9h6v12h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3q17vbkw {
  d: path("M12.7 15H2.5V3.5h15v2.7M10 15v4m-2.75 0h5.4");
}
</style><g class="ulnmmdpxh"><path class="v3q17vbkw"/><path class="nicb36bun"/></g>`,
		"fallback": "uix-sharp:responsive-design",
	});
}

export default Component;
