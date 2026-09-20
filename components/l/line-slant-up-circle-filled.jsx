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

.tq1ofvl-k {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M3.808 22.193a1 1 0 0 1 0-1.415l16.97-16.97a1 1 0 1 1 1.414 1.414l-16.97 16.97a1 1 0 0 1-1.414 0");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGgbm1KDng"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="tq1ofvl-k"/></mask></defs><circle mask="url(#SVGgbm1KDng)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:line-slant-up-circle-filled",
	});
}

export default Component;
