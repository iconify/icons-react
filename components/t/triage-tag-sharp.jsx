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
		"content": `<style>.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xmr9n4bef {
  d: path("M10.5 2.75H15l1.06 1.06l1.13 1.13L18.25 6v15.25H5.75V6l1.06-1.06l1.13-1.13L9 2.75z");
}

.z--jk5bnq {
  d: path("M13 6.5a1 1 0 1 1-2 0a1 1 0 1 1 2 0m-4.5 3.75h7M8.5 15h7m-7 3h7");
}
</style><g class="x2cwu0gfd"><path class="xmr9n4bef"/><path class="z--jk5bnq"/></g>`,
		"fallback": "iconoven:triage-tag-sharp",
	});
}

export default Component;
