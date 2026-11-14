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
		"content": `<style>.f4tns0jdm {
  d: path("M3 9.5a9 4.5 0 1 0 18 0a9 4.5 0 1 0-18 0Z");
}

.f6gjahqkn {
  d: path("M7.5 9.5a4.5 2 0 1 0 9 0a4.5 2 0 1 0-9 0Z");
}

.kr4fvryln {
  d: path("M3 9.5V14c0 2.5 4 4.5 9 4.5s9-2 9-4.5V9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f4tns0jdm"/><path class="kr4fvryln"/><path class="f6gjahqkn"/></g>`,
		"fallback": "uix-sharp:training-tire",
	});
}

export default Component;
