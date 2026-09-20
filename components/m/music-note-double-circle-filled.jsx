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

.c757m7bdq {
  cx: 5.75px;
  cy: 16px;
  rx: 3px;
  ry: 2.5px;
}

.fix04rbfz {
  cx: 14.75px;
  cy: 15px;
  rx: 3px;
  ry: 2.5px;
}

.ft5dv1b6b {
  fill: none;
}

.hpqtfpzva {
  fill-rule: evenodd;
  d: path("M6.75 3.81a1 1 0 0 1 .906-.996l9-.846a1 1 0 0 1 1.094.996v2.181a1 1 0 0 1-.901.995l-9 .893a1 1 0 0 1-1.099-.995z");
}

.ivjvz2eii {
  fill: var(--svg-color--000, #000);
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.pzlr9db_n {
  fill-rule: evenodd;
  d: path("M15.75 5h2v10h-2zm-9 1h2v10h-2z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVG9KLwBeRh"><path class="k5-vjlrin"/><g transform="translate(3 3)" class="ivjvz2eii"><path clip-rule="evenodd" class="hpqtfpzva"/><ellipse class="fix04rbfz"/><ellipse class="c757m7bdq"/><path clip-rule="evenodd" class="pzlr9db_n"/></g></mask></defs><circle mask="url(#SVG9KLwBeRh)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:music-note-double-circle-filled",
	});
}

export default Component;
