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
		"content": `<style>.f6cxlrkdq {
  d: path("M8.25 2.75h7.5v11.5h-7.5z");
}

.hhsw5ygdj {
  d: path("M4.75 10.75a7.25 7.25 0 0 0 14.5 0M12 18v3.25M3.75 3.75l16.5 16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="f6cxlrkdq"/><path class="hhsw5ygdj"/></g>`,
		"fallback": "iconoven:mic-off-sharp",
	});
}

export default Component;
