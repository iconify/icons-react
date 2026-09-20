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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.h3uk7tbvx {
  fill: var(--svg-color--35633e, #35633e);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.r12-1qc-h {
  fill: var(--svg-color--fff, #fff);
  d: path("M5.124 11.346h3.763l1.939 2.624l-1.857 2.652zm.139 1.449H4l.676-.94l.574.94zm4.104 4.363l2.683-3.839l6.025-8.574A10.2 10.2 0 0 1 20 7.1l-.006.114l-8.322 11.807a.57.57 0 0 1-.711.178a.6.6 0 0 1-.205-.165z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="h3uk7tbvx"/><path class="r12-1qc-h"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:vtc-background",
	});
}

export default Component;
