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

.gbqb6oopz {
  d: path("M13.5 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z");
}

.ivjvz2eii {
  fill: var(--svg-color--000, #000);
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.kwzfm0bkz {
  fill-rule: evenodd;
  d: path("M9 9v2h2V9zM8 7.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zM15 9v2h2V9zm-1-1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zM9 15v2h2v-2zm-1-1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z");
}

.lyg595b8g {
  fill-rule: evenodd;
  d: path("M21 6a1 1 0 0 1-1 1h-3.5a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1");
}

.r7wxzgbat {
  fill-rule: evenodd;
  d: path("M6 5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1m0 16a1 1 0 0 1-1-1v-3.5a1 1 0 1 1 2 0V20a1 1 0 0 1-1 1");
}

.rp5ibtben {
  fill-rule: evenodd;
  d: path("M20 21a1 1 0 0 1-1-1v-3.5a1 1 0 1 1 2 0V20a1 1 0 0 1-1 1m0-16a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1");
}

.sojxdkbvk {
  fill-rule: evenodd;
  d: path("M5 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1");
}

.y-fhtpb_f {
  fill-rule: evenodd;
  d: path("M5 20a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m16 0a1 1 0 0 1-1 1h-3.5a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVG6cP7m3aS"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="kwzfm0bkz"/><path class="gbqb6oopz"/><path clip-rule="evenodd" class="sojxdkbvk"/><path clip-rule="evenodd" class="r7wxzgbat"/><path clip-rule="evenodd" class="y-fhtpb_f"/><path clip-rule="evenodd" class="rp5ibtben"/><path clip-rule="evenodd" class="lyg595b8g"/></g></mask></defs><circle mask="url(#SVG6cP7m3aS)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:qr-code-circle-filled",
	});
}

export default Component;
