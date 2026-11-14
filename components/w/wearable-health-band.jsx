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
		"content": `<style>.djnfnxbxn {
  d: path("M7.5 7h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm1 0V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V7m-7 10v3.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V17");
}

.fhlgtac_r {
  fill: currentColor;
  d: path("M12 14.75c-1.5-1-2.75-2-2.75-3.5c0-1 .75-1.75 1.75-1.75c.5 0 .75.25 1 .75c.25-.5.5-.75 1-.75c1 0 1.75.75 1.75 1.75c0 1.5-1.25 2.5-2.75 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="djnfnxbxn"/><path class="fhlgtac_r"/></g>`,
		"fallback": "uix-sharp:wearable-health-band",
	});
}

export default Component;
