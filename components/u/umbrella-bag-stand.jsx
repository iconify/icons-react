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
		"content": `<style>.axbe2qbpn {
  d: path("M8 9h8v10.5H8ZM5.5 19.5h13v2h-13Z");
}

.k-skrej7y {
  d: path("M12 5.5L14.75 9L12 17.5L9.25 9Zm0 0v-1a1.75 1.75 0 0 0-3.5 0m3.5 1v12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="axbe2qbpn"/><path class="k-skrej7y"/></g>`,
		"fallback": "uix-sharp:umbrella-bag-stand",
	});
}

export default Component;
