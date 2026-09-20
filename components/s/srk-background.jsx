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
		"content": `<style>.b9jo3mgdj {
  fill: var(--svg-color--fff, #fff);
  d: path("m9.5 9.5l-5.5 5v-5zm10.5 5l-5 5v-5zm-5 0H9.498l5.5-5zm0-5H9.502l5.5-5z");
}

.dz49mabwp {
  fill: var(--svg-color--88b1ca, #88b1ca);
  d: path("M24 0H0v24h24z");
}

.e5cz8bbew {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.5 19.5H4l5.5-5H15zM20 9.5l-5 5v-5zm0-5l-5 5v-5zm-5 5l-5.501 5v-5zm0-5l-5.499 5v-5z");
}

.ft5dv1b6b {
  fill: none;
}

.l074y8bjc {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.5 14.5H4l5.5-5zm0-5H4l5.5-5zm10.5 5h-5l5-5zm-5 5H9.498l5.5-5z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="dz49mabwp"/><path class="e5cz8bbew"/><path class="b9jo3mgdj"/><path class="l074y8bjc"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:srk-background",
	});
}

export default Component;
