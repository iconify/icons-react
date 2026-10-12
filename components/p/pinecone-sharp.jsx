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
		"content": `<style>.jzcykhbjw {
  d: path("M8.75 8.25L12 10.5l3.25-2.25M8.5 13l3.5 2.5l3.5-2.5");
}

.n9pwrjb3r {
  d: path("M12 2.75c3.5 0 6.25 3.5 6.25 7.75c0 5.5-3 10.75-6.25 10.75S5.75 16 5.75 10.5c0-4.25 2.75-7.75 6.25-7.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="n9pwrjb3r"/><path class="jzcykhbjw"/></g>`,
		"fallback": "iconoven:pinecone-sharp",
	});
}

export default Component;
