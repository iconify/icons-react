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
		"content": `<style>.b4ckndyks {
  d: path("M12.5 7.5c-2.25 1.5-2.75 4-2 7m-1.5 7l1.5-7l2 7");
}

.p12wtmuup {
  d: path("M12 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zm8pwrbun {
  d: path("m11.25 8.75l2.75 3.5l.5 2.75");
}
</style><g class="ulnmmdpxh"><path class="p12wtmuup"/><path class="b4ckndyks"/><path class="zm8pwrbun"/></g>`,
		"fallback": "uix-sharp:person-head-down",
	});
}

export default Component;
