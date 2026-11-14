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
		"content": `<style>.afxdifitn {
  d: path("M12.75 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM8.5 13L11 9.5l2 2l1-1l1.5 2.5");
}

.r6xwxwblj {
  d: path("M6.5 2.5h11v13h-11Zm5.5 13V19m-4.5 2.5a4.5 2.5 0 0 1 9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r6xwxwblj"/><path class="afxdifitn"/></g>`,
		"fallback": "uix-sharp:poster-stand",
	});
}

export default Component;
