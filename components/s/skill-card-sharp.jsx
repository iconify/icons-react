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
		"content": `<style>.dq-l96b1c {
  d: path("M15.75 8.25q.45 3.3 3.75 3.75q-3.3.45-3.75 3.75Q15.3 12.45 12 12q3.3-.45 3.75-3.75Z");
}

.seih92bcf {
  d: path("M2.75 4.75h18.5v14.5H2.75zm3.5 5h4m-4 4.5h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="seih92bcf"/><path class="dq-l96b1c"/></g>`,
		"fallback": "iconoven:skill-card-sharp",
	});
}

export default Component;
