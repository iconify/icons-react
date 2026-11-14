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
		"content": `<style>.a9_ydt7uv {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-6.5 5h17");
}

.bkt517b4s {
  d: path("M12 6.5V14l-4 5.5m4-5.5l4 5.5m-13 0h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a9_ydt7uv"/><path class="bkt517b4s"/></g>`,
		"fallback": "uix-sharp:skimboarder",
	});
}

export default Component;
