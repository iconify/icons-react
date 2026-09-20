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
		"content": `<style>.agix0bcxn {
  fill: var(--svg-color--9601d9, #9601d9);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.lqrp8i-lb {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.473 6H6.4v4h4.073z");
}

.nyvdh3bby {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.454 20L6.4 17v-3h8.145V4L17.6 7v10H9.454z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="agix0bcxn"/><path class="nyvdh3bby"/><path class="lqrp8i-lb"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:pillar-background",
	});
}

export default Component;
