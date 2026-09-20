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

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}

.m417k3b2k {
  d: path("M18.156 19.992A2 2 0 0 1 16.42 21H9.58a2 2 0 0 1-1.736-1.008l-3.429-6a2 2 0 0 1 0-1.984l3.429-6A2 2 0 0 1 9.58 5h6.84a2 2 0 0 1 1.736 1.008l3.429 6a2 2 0 0 1 0 1.984zM9.58 19h6.84l3.428-6l-3.428-6H9.58l-3.428 6z");
}

.tpa5r0ocv {
  d: path("M13 11a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVG4y6kVj1D"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="m417k3b2k"/><path class="tpa5r0ocv"/></g></mask></defs><circle mask="url(#SVG4y6kVj1D)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:nut-circle-filled",
	});
}

export default Component;
