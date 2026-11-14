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
		"content": `<style>.bmn2-cbvq {
  d: path("M7.5 5.5H10V8H7.5Zm0 5.25H10v2.5H7.5Zm0 5.25H10v2.5H7.5Zm5.25-9.25h3.75M12.75 12h3.75m-3.75 5.25H15");
}

.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="bmn2-cbvq"/></g>`,
		"fallback": "uix-sharp:shopping-list",
	});
}

export default Component;
