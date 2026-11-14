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
		"content": `<style>.q267_qb7f {
  d: path("M8 3C5 3 4 5 4 8s1.5 5 2.5 7l1 5c.25 1.25 1.75 1.25 2 0l1-4.5c.25-1 2.75-1 3 0l1 4.5c.25 1.25 1.75 1.25 2 0l1-5c1-2 2.5-4 2.5-7s-1-5-4-5c-1.5 0-2.5 1-4 1S9.5 3 8 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vpu9kv98h {
  fill: currentColor;
  d: path("M8 3C5.75 3 4.25 4.25 4 7h16c-.25-2.75-1.75-4-4-4c-1.5 0-2.5 1-4 1S9.5 3 8 3Z");
}
</style><g class="ulnmmdpxh"><path class="q267_qb7f"/><path class="vpu9kv98h"/></g>`,
		"fallback": "uix-sharp:tooth-gold",
	});
}

export default Component;
