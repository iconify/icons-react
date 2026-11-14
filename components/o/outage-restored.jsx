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
		"content": `<style>.xz5amqb7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2L3.5 12.5h6l-1.5 8l8-11h-5.5Zm2.75 16l2 2L21 15.75");
}
</style><path class="xz5amqb7o"/>`,
		"fallback": "uix-sharp:outage-restored",
	});
}

export default Component;
