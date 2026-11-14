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
		"content": `<style>.tcxvetbgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19V7h-19Zm10.1 17H5.5V7h13v6.6M8.5 11H13m-4.5 3.5h3m3.5.5l6 6m0-6l-6 6");
}
</style><path class="tcxvetbgr"/>`,
		"fallback": "uix-sharp:shelf-label-wrong",
	});
}

export default Component;
