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

.ivjvz2eii {
  fill: var(--svg-color--000, #000);
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.y79x3prpc {
  d: path("M13 20.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5");
}

.z--84pbxy {
  fill-rule: evenodd;
  d: path("M17.5 3h-9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 18V5h9v16z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGprFWEqJj"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="z--84pbxy"/><path class="y79x3prpc"/></g></mask></defs><circle mask="url(#SVGprFWEqJj)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:smartphone-home-button-circle-filled",
	});
}

export default Component;
