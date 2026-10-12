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
		"content": `<style>.i5sjkluuw {
  d: path("M6.25 14.5a4 4 0 0 1 8 0m2.5 4.25h4");
}

.lqrgq66ey {
  cx: 10.25px;
  cy: 8.25px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-fd6pbmc {
  cx: 10.25px;
  cy: 10.25px;
  r: 7.5px;
}
</style><g class="x2cwu0gfd"><circle class="y-fd6pbmc"/><circle class="lqrgq66ey"/><path class="i5sjkluuw"/></g>`,
		"fallback": "iconoven:unfollow-sharp",
	});
}

export default Component;
