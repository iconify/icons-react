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
		"content": `<style>.ckw319bwy {
  d: path("M13.864 12.157L14 11.75c.25-1 1-1.5 1-2.75s-.5-2.25-1.75-2.25c-.75 0-.75.5-1.25.5s-.5-.5-1.25-.5C9.5 6.75 9 7.75 9 9s.75 1.75 1 2.75l.5 1.5l1.5-2l1.112 1.482M15 15.5a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H17L15 21Z");
}

.rmsv5zb1k {
  d: path("M12.2 16.5H2.5v-13h19v8.3M12 16.5v4m-4 0h4.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rmsv5zb1k"/><path class="ckw319bwy"/></g>`,
		"fallback": "uix-sharp:tele-dentistry",
	});
}

export default Component;
