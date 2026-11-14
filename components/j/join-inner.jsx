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
		"content": `<style>.qa7jj2b-r {
  d: path("M2.5 2.5H15V15H2.5Z");
}

.qoyr22bud {
  fill: currentColor;
  d: path("M9 11a2 2 0 0 1 2-2h4v4a2 2 0 0 1-2 2H9Z");
}

.rii8zpwwj {
  d: path("M9 9h12.5v12.5H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qa7jj2b-r"/><path class="rii8zpwwj"/><path class="qoyr22bud"/></g>`,
		"fallback": "uix-sharp:join-inner",
	});
}

export default Component;
