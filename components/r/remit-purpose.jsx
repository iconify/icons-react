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
		"content": `<style>.au6_zk5ea {
  d: path("M15 15h3.25l3 3L18 21.25l-3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w02ta8btp {
  d: path("m12.746 19.978l-.246.522L10 15l-6.5-3.5l17-8l-4.093 8.697M10 15l2.225-2.437m.337-.369L20.5 3.5");
}
</style><g class="ulnmmdpxh"><path class="w02ta8btp"/><path class="au6_zk5ea"/></g>`,
		"fallback": "uix-sharp:remit-purpose",
	});
}

export default Component;
