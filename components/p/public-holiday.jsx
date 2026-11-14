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
		"content": `<style>.fg_ppbiyt {
  d: path("m5.75 7.75l.498.249a1.5 1.5 0 0 1 .587 2.159l-.71 1.092a1.06 1.06 0 0 1-1.943-.465l-.194-1.812A1.222 1.222 0 0 1 5.75 7.75m6.165 1.5h.17a1.5 1.5 0 0 1 1.405 2.027l-.365.973a1.202 1.202 0 0 1-2.25 0l-.365-.973a1.5 1.5 0 0 1 1.405-2.027m5.837-1.251l.498-.249a1.222 1.222 0 0 1 1.762 1.223l-.194 1.812a1.06 1.06 0 0 1-1.943.465l-.71-1.092a1.5 1.5 0 0 1 .587-2.159M7.5 18.5h.01M12 20.25h.01m4.49-1.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjg2z7bvn {
  d: path("M2.5 5.5C8 10 16 10 21.5 5.5");
}
</style><g class="hntgybcog"><path class="vjg2z7bvn"/><path class="fg_ppbiyt"/></g>`,
		"fallback": "uix:public-holiday",
	});
}

export default Component;
