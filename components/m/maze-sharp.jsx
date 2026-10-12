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
		"content": `<style>.p87t_gb_u {
  cx: 18.75px;
  cy: 18.75px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyb8qn3qj {
  d: path("M7.5 3H21v13.5m0 4.5H3V3m4.5 4.5v9H12M12 3v4.5h4.5m0 4.5v4.5M12 12h4.5");
}
</style><g class="x2cwu0gfd"><path class="zyb8qn3qj"/><circle class="p87t_gb_u"/></g>`,
		"fallback": "iconoven:maze-sharp",
	});
}

export default Component;
