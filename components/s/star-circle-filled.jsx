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

.l3sahxb2q {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M8.705 20.886L13 18.97l4.295 1.915a1 1 0 0 0 1.402-1.019l-.494-4.677l3.148-3.493a1 1 0 0 0-.535-1.647l-4.6-.976L13.865 5a1 1 0 0 0-1.732 0l-2.35 4.074l-4.6.976a1 1 0 0 0-.535 1.647l3.148 3.494l-.494 4.676a1 1 0 0 0 1.402 1.018m3.888-3.924l-3.119 1.39l.359-3.395a1 1 0 0 0-.252-.774l-2.286-2.537l3.34-.708a1 1 0 0 0 .66-.478L13 7.502l1.706 2.958a1 1 0 0 0 .659.478l3.34.708l-2.286 2.537a1 1 0 0 0-.252.774l.359 3.396l-3.119-1.39a1 1 0 0 0-.814 0");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGiHSMccPh"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="l3sahxb2q"/></mask></defs><circle mask="url(#SVGiHSMccPh)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:star-circle-filled",
	});
}

export default Component;
