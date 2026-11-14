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
		"content": `<style>.plwdymbkg {
  d: path("M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM3 17.5h18M12 6v8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrjzrpbwp {
  d: path("M8.75 11.25L12 14.5l3.25-3.25");
}
</style><g class="ulnmmdpxh"><path class="plwdymbkg"/><path class="wrjzrpbwp"/></g>`,
		"fallback": "uix-sharp:interact-key",
	});
}

export default Component;
