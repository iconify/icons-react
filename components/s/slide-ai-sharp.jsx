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
		"content": `<style>.f6-iuac9r {
  d: path("M2.75 3.25h18.5v12.5H2.75zM12 15.75v2.5m-3.5 3l3.5-3l3.5 3");
}

.k2w0sfb4p {
  d: path("M12 5.75q.45 3.3 3.75 3.75q-3.3.45-3.75 3.75q-.45-3.3-3.75-3.75q3.3-.45 3.75-3.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="f6-iuac9r"/><path class="k2w0sfb4p"/></g>`,
		"fallback": "iconoven:slide-ai-sharp",
	});
}

export default Component;
