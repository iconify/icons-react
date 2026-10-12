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
		"content": `<style>.rm1sa67-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.5h3.5m11.5 0h3.5m-8.54-2.54l1.83 1.83l.71.71l-.71.71l-1.83 1.83l-.71.71l-.71-.71l-1.83-1.83l-.71-.71l.71-.71l1.83-1.83l.71-.71zM12 12V8.75m.75-5.5h5.5l-.4.63l-.95 1.49l-.4.63l.4.63l.95 1.49l.4.63H12v-5.5z");
}
</style><path class="rm1sa67-y"/>`,
		"fallback": "iconoven:milestone-sharp",
	});
}

export default Component;
