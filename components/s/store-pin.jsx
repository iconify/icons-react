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
		"content": `<style>.k7f2qsbov {
  d: path("M12 18.25c-1.75-1.5-2.75-3-2.75-4.25a2.75 2.75 0 0 1 5.5 0c0 1.25-1 2.75-2.75 4.25Z");
}

.pnog9ljro {
  d: path("m3 8.5l1.5-5h15l1.5 5Zm1.5 0V21h15V8.5m-10-5l-.5 5m5.5-5l.5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pnog9ljro"/><path class="k7f2qsbov"/></g>`,
		"fallback": "uix-sharp:store-pin",
	});
}

export default Component;
