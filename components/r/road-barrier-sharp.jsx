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
		"content": `<style>.ggsmnab5p {
  cx: 6px;
  cy: 4px;
  r: 1.25px;
}

.sum-9ccvt {
  d: path("M6 5.25V8m-1.5 4l4 9.25m0-9.25l-4 9.25m11-9.25l4 9.25m0-9.25l-4 9.25");
}

.vkm9fxcym {
  d: path("M2.75 8h18.5v4H2.75zm4.75 4L10 8m3.5 4L16 8");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vkm9fxcym"/><circle class="ggsmnab5p"/><path class="sum-9ccvt"/></g>`,
		"fallback": "iconoven:road-barrier-sharp",
	});
}

export default Component;
