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

.izylkbbto {
  fill-rule: evenodd;
  d: path("M7.475 7.475a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m6.364 6.364a3.5 3.5 0 1 1-4.95-4.95a3.5 3.5 0 0 1 4.95 4.95");
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.z5i0rygjo {
  d: path("M14.192 16.314a1.5 1.5 0 1 1 2.122-2.122l3.535 3.536a1.5 1.5 0 1 1-2.121 2.121z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVG2LDC9cPz"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="izylkbbto"/><path class="z5i0rygjo"/></g></mask></defs><circle mask="url(#SVG2LDC9cPz)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:loop-circle-filled",
	});
}

export default Component;
