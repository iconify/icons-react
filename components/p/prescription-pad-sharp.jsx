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
		"content": `<style>.gc614nxdp {
  d: path("M19.75 6.75v14.5H6.25m-3-18.5H16.5v2.5H3.25zm4.75 11V8h3.4v3H8m1.75 0l3 3m0-2.75L10 14m-2 2.25h6.5");
}

.o-8i64mep {
  d: path("M3.25 5.25H16.5v13.5H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="o-8i64mep"/><path class="gc614nxdp"/></g>`,
		"fallback": "iconoven:prescription-pad-sharp",
	});
}

export default Component;
