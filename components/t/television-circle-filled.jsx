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

.s_z29-biv {
  d: path("M14.28 8.625a1 1 0 0 1-1.56-1.25l2-2.5a1 1 0 0 1 1.56 1.25z");
}

.wveht9bpc {
  fill-rule: evenodd;
  d: path("M5 11v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3m3 8a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z");
}

.zkt_v8b4q {
  d: path("M11.72 8.625a1 1 0 0 0 1.56-1.25l-2-2.5a1 1 0 0 0-1.56 1.25z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGXgHLrcul"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="wveht9bpc"/><path class="s_z29-biv"/><path class="zkt_v8b4q"/></g></mask></defs><circle mask="url(#SVGXgHLrcul)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:television-circle-filled",
	});
}

export default Component;
