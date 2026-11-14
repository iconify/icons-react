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
		"content": `<style>.pmyiracjj {
  d: path("M8.5 18.5a3.5 3.5 0 0 1 7 0m-9.5 0h12M12 12v1m-4.75 1l.75.75m8.75-.75l-.75.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wocaxlmgc {
  d: path("M3 4.5h18v17H3Zm5-2v4m8-4v4m-13 3h18");
}
</style><g class="ulnmmdpxh"><path class="wocaxlmgc"/><path class="pmyiracjj"/></g>`,
		"fallback": "uix-sharp:shift-early",
	});
}

export default Component;
