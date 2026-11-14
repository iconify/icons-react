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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywlkpyzgy {
  d: path("M9.75 3.25a2.5 2.5 0 0 1 1.75-.75H19A2.5 2.5 0 0 1 21.5 5v6a2.5 2.5 0 0 1-2.5 2.5h-.75M6 12.5l2 2l4-4");
}

.zwc7ivbtr {
  d: path("M5 7h8a2.5 2.5 0 0 1 2.5 2.5V15a2.5 2.5 0 0 1-2.5 2.5H9l-4 3v-3A2.5 2.5 0 0 1 2.5 15V9.5A2.5 2.5 0 0 1 5 7Z");
}
</style><g class="ulnmmdpxh"><path class="zwc7ivbtr"/><path class="ywlkpyzgy"/></g>`,
		"fallback": "uix-sharp:objection-handling",
	});
}

export default Component;
