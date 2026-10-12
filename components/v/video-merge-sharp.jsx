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
		"content": `<style>.gfweemjim {
  d: path("m16.49 10.35l1.77 1.3l.49.35l-.49.35l-1.77 1.3L16 14v-4z");
}

.jx656wb3c {
  d: path("M2.75 6h4l.9 1.2L11 12m-8.25 6h4l.9-1.2L11 12h2m0-5.25h8.25v10.5H13z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="jx656wb3c"/><path class="gfweemjim"/></g>`,
		"fallback": "iconoven:video-merge-sharp",
	});
}

export default Component;
