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

.msh5hybll {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M3.808 3.808a1 1 0 0 1 1.414 0l16.97 16.97a1 1 0 0 1-1.414 1.414L3.808 5.222a1 1 0 0 1 0-1.414");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGgsz1KdQX"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="msh5hybll"/></mask></defs><circle mask="url(#SVGgsz1KdQX)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:line-slant-down-circle-filled",
	});
}

export default Component;
