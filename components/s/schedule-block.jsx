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
		"content": `<style>.myahrrb2p {
  d: path("M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm1 2l4-4");
}

.r4_snobgl {
  d: path("M12.6 20.5H3.5V5h17v7.6M8 3v4m8-4v4M3.5 10h17M8 3v4m8-4v4M3.5 10h17M7 13.75h2.75M7 17.25h2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r4_snobgl"/><path class="myahrrb2p"/></g>`,
		"fallback": "uix-sharp:schedule-block",
	});
}

export default Component;
