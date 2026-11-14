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
		"content": `<style>.btm028itd {
  d: path("M8.5 13h7v7.5h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vi6v2b-ho {
  d: path("m3 9l1.5-5h15L21 9Zm1.5 2v9.5h15V11");
}
</style><g class="ulnmmdpxh"><path class="vi6v2b-ho"/><path class="btm028itd"/></g>`,
		"fallback": "uix-sharp:retail-unit",
	});
}

export default Component;
