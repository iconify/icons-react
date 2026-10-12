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
		"content": `<style>.nhawi_b4r {
  d: path("M2.75 20.25v-10.1l.78-.62l7.69-6.16l.78-.62l.78.62l7.69 6.16l.78.62v11.1H2.75z");
}

.ust73tbml {
  d: path("M9.5 21.25v-7h5.75v7m-6.22-7.18l-3.06-1.14l-.47-.18v8.5h4v-7z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nhawi_b4r"/><path class="ust73tbml"/></g>`,
		"fallback": "iconoven:open-house-sharp",
	});
}

export default Component;
