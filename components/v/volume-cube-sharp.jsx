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
		"content": `<style>.eq_pbvbgo {
  d: path("m13.38 3.6l.62-.281l.62.281l5.9 2.95l.726.332l.004.798v8.64l-.004.798l-.726.332l-5.9 2.95l-.62.281l-.62-.281l-5.9-2.95l-.726-.332l-.004-.798V7.68l.004-.798l.726-.332Z");
}

.ou-zgf33e {
  d: path("m7 7.25l7 3.5l7-3.5m-7 3.5v9.5M3.75 7v10m-1-8.75l1-1.25l1 1.25m-2 7.5l1 1.25l1-1.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="eq_pbvbgo"/><path class="ou-zgf33e"/></g>`,
		"fallback": "iconoven:volume-cube-sharp",
	});
}

export default Component;
