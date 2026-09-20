import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bd9gczbnq {
  cx: 13px;
  cy: 13px;
  r: 13px;
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.qb7v7puji {
  fill: var(--svg-color--000, #000);
  d: path("M7 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGnE6NYDvM"><path class="k5-vjlrin"/><path class="qb7v7puji"/></mask></defs><circle mask="url(#SVGnE6NYDvM)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:square-filled-circle-filled",
	});
}

export default Component;
