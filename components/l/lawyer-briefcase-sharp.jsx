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
		"content": `<style>.fjehvrbpc {
  d: path("M2.75 7.25h18.5v13.5H2.75zm6 0v-3.5h6.5v3.5");
}

.i1fgvobac {
  d: path("M12 10.75v6.5m-1.75 0h3.5M8 12h8m-8 0l-1.25 2.75h2.5Zm8 0l-1.25 2.75h2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fjehvrbpc"/><path class="i1fgvobac"/></g>`,
		"fallback": "iconoven:lawyer-briefcase-sharp",
	});
}

export default Component;
