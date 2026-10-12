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
		"content": `<style>.n8cx0jmzn {
  d: path("M7 15a3.25 3.25 0 0 1-1.25-6.25A3.25 3.25 0 0 1 9.5 4.5a3 3 0 0 1 5 0a3.25 3.25 0 0 1 3.75 4.25A3.25 3.25 0 0 1 17 15Zm3.5 5.85V15h3v6.25h-3z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z604tbbfo {
  d: path("M8.75 14.6v-3.1l.29-.27l2.67-2.46l.29-.27l.29.27l2.67 2.46l.29.27V15h-6.5z");
}

.zjocr2bcp {
  d: path("M11.25 15v-2.25h1.5V15");
}
</style><g class="x2cwu0gfd"><path class="n8cx0jmzn"/><path class="z604tbbfo"/><path class="zjocr2bcp"/></g>`,
		"fallback": "iconoven:treehouse-sharp",
	});
}

export default Component;
