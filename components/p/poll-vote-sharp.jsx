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
		"content": `<style>.dlqe2221s {
  d: path("M11.5 15.5h4");
}

.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.p0wu51vaj {
  d: path("M11.5 8.5H17");
}

.v_u09sohe {
  cx: 7.75px;
  cy: 15.5px;
  r: 1.75px;
}

.w7-glrb_d {
  cx: 7.75px;
  cy: 8.5px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><circle class="w7-glrb_d"/><path class="p0wu51vaj"/><circle class="v_u09sohe"/><path class="dlqe2221s"/></g>`,
		"fallback": "iconoven:poll-vote-sharp",
	});
}

export default Component;
