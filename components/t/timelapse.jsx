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
		"content": `<style>.des5jubpl {
  d: path("m4.25 3l3 .75l-.75 3M12 7v5l3.5 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.voincubod {
  d: path("M12 2.5a9.5 9.5 0 1 1-4.75 1.25");
}
</style><g class="ulnmmdpxh"><path class="voincubod"/><path class="des5jubpl"/></g>`,
		"fallback": "uix-sharp:timelapse",
	});
}

export default Component;
