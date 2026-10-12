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
		"content": `<style>.rodzibcla {
  d: path("M6.75 3.75h10.5m-5.25 0l2.13 8.36");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2w-83bda {
  cx: 15px;
  cy: 15.5px;
  r: 2.5px;
}

.z5-oagmmd {
  d: path("M6.1 19.96a17.25 17.25 0 0 0 11.8 0");
}
</style><g class="x2cwu0gfd"><path class="rodzibcla"/><circle class="z2w-83bda"/><path class="z5-oagmmd"/></g>`,
		"fallback": "iconoven:physics-sharp",
	});
}

export default Component;
