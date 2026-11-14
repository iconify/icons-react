import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m4c50v7lj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.796 4.78l2.354-1.308q.097-.054.2-.095t.211-.069t.218-.042t.221-.014t.221.014q.111.014.218.042q.108.028.211.069t.2.095l5.396 2.998q.102.057.195.126q.094.07.177.151q.084.081.156.173t.131.192t.104.208t.076.22t.046.228t.016.232q0 .117-.016.232q-.015.116-.046.228t-.076.22t-.104.208t-.131.192t-.156.173t-.177.151t-.195.126l-3.039 1.688M3 12l9 5l.703-.391m5.07-2.816L21 12M3 16l9 5l3.238-1.799m5.07-2.817L21 16M3.5 3.5l17 17");
}
</style><path class="m4c50v7lj"/>`,
		"fallback": "uix:layers-hidden",
	});
}

export default Component;
