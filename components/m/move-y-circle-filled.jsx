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

.ccj493tka {
  d: path("M13 19a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1");
}

.ft5dv1b6b {
  fill: none;
}

.hv7bw0lag {
  d: path("M17.768 9.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409");
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}

.phn4czbkz {
  d: path("M8.232 9.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128");
}

.s76sdbbqd {
  d: path("M13 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m4.768 9.026a1 1 0 0 1-.128 1.409l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.128");
}

.vrqke7uoc {
  d: path("M8.232 16.026a1 1 0 0 1 1.408-.128l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVG5LqvBuCz"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="phn4czbkz"/><path class="hv7bw0lag"/><path class="s76sdbbqd"/><path class="vrqke7uoc"/><path class="ccj493tka"/></g></mask></defs><circle mask="url(#SVG5LqvBuCz)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:move-y-circle-filled",
	});
}

export default Component;
