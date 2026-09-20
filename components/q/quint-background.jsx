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
		"content": `<style>.c6w-dgb7f {
  fill: var(--svg-color--000, #000);
  d: path("m6.667 14.132l-.533.534h6.933l-.534-.534zm0-7.464l-.533-.534h8.533l-.534.534zm8-.534l-.534.534v12.799l.534.533z");
}

.e7jhkb8zi {
  fill: var(--svg-color--000, #000);
  d: path("m9.334 8.534l-3.2-2.4v8.533l3.2-2.4z");
}

.ft5dv1b6b {
  fill: none;
}

.k4cv7cc9z {
  fill: var(--svg-color--000, #000);
  d: path("M13.067 16.8v-2.134H6.134V6.133h8.532V20H20v-2.133h-3.2V4H4v12.8z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.s71arz1pl {
  fill: var(--svg-color--000, #000);
  d: path("M16.8 17.333v.533H20l-.47-.534z");
}

.uei1u7cfc {
  fill: var(--svg-color--14f4c8, #14f4c8);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="uei1u7cfc"/><path class="s71arz1pl"/><path class="k4cv7cc9z"/><path class="c6w-dgb7f"/><path class="e7jhkb8zi"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:quint-background",
	});
}

export default Component;
