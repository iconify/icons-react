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
		"content": `<style>.b86aaxawg {
  d: path("m13.11 3.32l7.03 3.61l1.11.57l-1.11.57l-7.03 3.61l-1.11.57l-1.11-.57l-7.03-3.61l-1.11-.57l1.11-.57l7.03-3.61L12 2.75z");
}

.ewaodbbhs {
  d: path("M2.75 16.5L12 21.25l9.25-4.75");
}

.jho2glbuy {
  d: path("M2.75 12L12 16.75L21.25 12");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b86aaxawg"/><path class="jho2glbuy"/><path class="ewaodbbhs"/></g>`,
		"fallback": "iconoven:layers-off-sharp",
	});
}

export default Component;
