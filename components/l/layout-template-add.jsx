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
		"content": `<style>.q8zasvb7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 19.5H2.5v-17h17v9.7M2.5 8h17M8 8v11.5M18 15v6m-3-3h6");
}
</style><path class="q8zasvb7q"/>`,
		"fallback": "uix-sharp:layout-template-add",
	});
}

export default Component;
