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

.mnedb2b_z {
  d: path("M7.5 8.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2z");
}

.p2w7aobwj {
  d: path("M14.937 7.5h-3.874A2.003 2.003 0 0 1 13 5a2.003 2.003 0 0 1 1.937 2.5");
}

.uwe39lbqo {
  fill-rule: evenodd;
  d: path("M17.5 21.5a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zM13 11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5m-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGay2hneyH"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="p2w7aobwj"/><path class="mnedb2b_z"/><path clip-rule="evenodd" class="uwe39lbqo"/></g></mask></defs><circle mask="url(#SVGay2hneyH)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:trash-circle-filled",
	});
}

export default Component;
