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
		"content": `<style>.frmjpqb-t {
  stroke: var(--svg-color--fff, #fff);
  stroke-width: var(--svg-stroke-width--0-3px, 0.3px);
  d: path("m16.631 14.445l-3.79-5.112m3.79 5.111l-3.368 2.89m3.368-2.89l-5.311.223m1.522-5.334L14.105 4l-3.368 2.889m2.105 2.444l-1.522 5.334m1.522-5.334l-5.474.445m5.474-.445L10.737 6.89m2.526 10.444L10.105 20l1.215-5.333m1.943 2.666l-1.943-2.666m0 0l-3.952-4.89m3.369-2.888L7.368 9.778");
}

.ft5dv1b6b {
  fill: none;
}

.m8npyytrm {
  fill: var(--svg-color--a367ff, #a367ff);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="m8npyytrm"/><path class="frmjpqb-t"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:sense-background",
	});
}

export default Component;
