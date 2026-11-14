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
		"content": `<style>.p2m0zibzk {
  d: path("M3 3.5h18v15H3Z");
}

.ra3nu2bqt {
  d: path("M6 11c1.5-4 3.5-4 5 0s3.5 4 5 0M8 21h.01M12 21h.01M16 21h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p2m0zibzk"/><path class="ra3nu2bqt"/></g>`,
		"fallback": "uix-sharp:oscilloscope",
	});
}

export default Component;
