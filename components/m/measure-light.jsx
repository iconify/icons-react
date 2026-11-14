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
		"content": `<style>.o462ftb6f {
  d: path("M8 17a4 4 0 0 1 8 0m-4 0l2.75-2.75M12 2.5V6M6 4l1.25 2M18 4l-1.25 2");
}

.or_8f3bqm {
  d: path("M5.5 9h13v12.5h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="or_8f3bqm"/><path class="o462ftb6f"/></g>`,
		"fallback": "uix-sharp:measure-light",
	});
}

export default Component;
