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

.blwccsebx {
  d: path("M14.3 21.5H4.5v-19h15v9.8M8 7h8m-8 3.5h8M8 14h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="blwccsebx"/><path class="au6_zk5ea"/></g>`,
		"fallback": "uix-sharp:statement-tariff",
	});
}

export default Component;
