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

.fvqajmshh {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M9.75 6a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2m6.5 0a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2");
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVG7mer65sr"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="fvqajmshh"/></mask></defs><circle mask="url(#SVG7mer65sr)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:pause-circle-filled",
	});
}

export default Component;
