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
		"content": `<style>.nm7srwzks {
  d: path("M4.045 17.48L17.48 4.045l2.475 2.475L6.52 19.955Z");
}

.ogg2xy5lu {
  d: path("m8.464 18.01l2.122-2.121l3.889 3.889l-2.121 2.121Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nm7srwzks"/><path class="ogg2xy5lu"/></g>`,
		"fallback": "uix-sharp:tonfa-training",
	});
}

export default Component;
