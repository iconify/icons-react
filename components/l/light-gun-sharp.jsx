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
		"content": `<style>.ugq1lr01e {
  d: path("M4 5.75h16.75v4.75h-10.5l-.13.74l-1.49 8.27l-.13.74H3.75l.11-.74l1.28-8.27l.11-.74h-2V5.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z4af3m-sy {
  d: path("M9.5 14.5h4.25v-4");
}
</style><g class="x2cwu0gfd"><path class="ugq1lr01e"/><path class="z4af3m-sy"/></g>`,
		"fallback": "iconoven:light-gun-sharp",
	});
}

export default Component;
