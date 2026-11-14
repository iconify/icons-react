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
		"content": `<style>.izzcmdlqz {
  d: path("M12.5 2.5V8l1.75-1.25L16 8V2.5");
}

.qxocr3buf {
  d: path("M5 2.5h14v19H5Zm3.5 0v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qxocr3buf"/><path class="izzcmdlqz"/></g>`,
		"fallback": "uix-sharp:journal",
	});
}

export default Component;
