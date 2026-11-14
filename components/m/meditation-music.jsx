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
		"content": `<style>.m34a2rb5r {
  d: path("M11 13.5c-5 0-8-2.5-8.5-6c2.5 0 4.75 1 6 2.5m2.5 3.5c2.083 0 3.82-.434 5.172-1.194m1.646-1.271c.917-.969 1.488-2.177 1.682-3.535c-2.5 0-4.75 1-6 2.5m5.5 4.5v5m-3.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5-5l2.5 1");
}

.rtjthdcai {
  d: path("M11 3c3 2.5 3 7 0 10.5C8 10 8 5.5 11 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rtjthdcai"/><path class="m34a2rb5r"/></g>`,
		"fallback": "uix-sharp:meditation-music",
	});
}

export default Component;
