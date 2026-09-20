import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hg8187bsc {
  cx: 12px;
  cy: 13.5px;
  fill: var(--svg-color--664500, #664500);
  rx: 2.5px;
  ry: 3.5px;
}

.m-i3_ib8x {
  fill: var(--svg-color--5dadec, #5dadec);
  d: path("M29.5 27.5c0 2.762-2.238 5-5 5s-5-2.238-5-5s4-10 5-10s5 7.238 5 10");
}

.q-4sqnh6r {
  cx: 24px;
  cy: 13.5px;
  fill: var(--svg-color--664500, #664500);
  rx: 2.5px;
  ry: 3.5px;
}

.q1m2erv2p {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--ffcc4d, #ffcc4d);
}

.txk0gdelh {
  fill: var(--svg-color--664500, #664500);
  d: path("M27.335 22.629a.5.5 0 0 0-.635-.029c-.039.029-3.922 2.9-8.7 2.9c-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 0 0-.729.657C8.7 23.472 11.788 28.5 18 28.5s9.301-5.028 9.429-5.243a.5.5 0 0 0-.094-.628");
}
</style><circle class="q1m2erv2p"/><ellipse class="hg8187bsc"/><ellipse class="q-4sqnh6r"/><path class="txk0gdelh"/><path class="m-i3_ib8x"/>`,
		"fallback": "twemoji:smiling-face-with-tear",
	});
}

export default Component;
