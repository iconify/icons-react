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
		"content": `<style>.l3d7t6btp {
  d: path("M12.6 21.5H3.5v-19h15v11.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yugbdabaj {
  d: path("m7 6l4 3l4-3m-8 6.5h7.6m-7.6 4h4m4.5-1l5 5m0-5l-5 5");
}
</style><g class="ulnmmdpxh"><path class="l3d7t6btp"/><path class="yugbdabaj"/></g>`,
		"fallback": "uix-sharp:newsletter-issue-x",
	});
}

export default Component;
