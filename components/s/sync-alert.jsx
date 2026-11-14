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
		"content": `<style>.ejeffcbad {
  d: path("m15 2l-3 3l3 3m-3 11A7 7 0 0 1 7.05 7.05");
}

.m0opjt0wt {
  d: path("M12 5a7 7 0 0 1 4.95 11.95");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zctixekvo {
  d: path("m9 16l3 3l-3 3m3-12.75v3.25m0 2.75h.01");
}
</style><g class="ulnmmdpxh"><path class="m0opjt0wt"/><path class="ejeffcbad"/><path class="zctixekvo"/></g>`,
		"fallback": "uix-sharp:sync-alert",
	});
}

export default Component;
