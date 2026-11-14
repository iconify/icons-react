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
		"content": `<style>.anbxsb59k {
  d: path("M12.681 20.819L12.5 21L3 11.5V3h8.5l9.5 9.5l-.187.187");
}

.kfw7voxqo {
  d: path("M6.25 7.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM18 15v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="anbxsb59k"/><path class="kfw7voxqo"/></g>`,
		"fallback": "uix-sharp:tag-plus",
	});
}

export default Component;
