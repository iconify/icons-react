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
		"content": `<style>.cwvlkdynx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19m-19-4.5v9m19-9v9M5.5 9l-3 3l3 3m13-6l3 3l-3 3");
}
</style><path class="cwvlkdynx"/>`,
		"fallback": "uix-sharp:length",
	});
}

export default Component;
