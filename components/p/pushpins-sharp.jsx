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
		"content": `<style>.o111iwugk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.09 7.49l1.42 1.42l.53.53l-.53.53l-2.12 2.12l-.53.53v4.59l-.53-.53l-6.01-6.01l-.53-.53h4.59l.53-.53l2.12-2.12l.53-.53zm.08-3.26l4.6 4.6m-9.45 4.85l-6.01 6.01");
}
</style><path class="o111iwugk"/>`,
		"fallback": "iconoven:pushpins-sharp",
	});
}

export default Component;
