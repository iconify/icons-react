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
		"content": `<style>.ga_6qmmvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 20v-9.5a5 5 0 0 1 10 0V20Zm0-9h-.25a3 3 0 0 0 0 6H6m10-.5L21.5 9");
}
</style><path class="ga_6qmmvm"/>`,
		"fallback": "uix-sharp:watering-can-small",
	});
}

export default Component;
