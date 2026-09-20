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
		"content": `<style>.b809elbme {
  fill: var(--svg-color--00cd34, #00cd34);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.jmgtz_b3u {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("m20 4.5l-7.995 12l-7.99-12zm-1.94 1l-6.06 9l-6.06-9z");
}

.nbswwdxhy {
  fill: var(--svg-color--fff, #fff);
  d: path("M5 11.5h14v1H5z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.rs09r5bia {
  fill: var(--svg-color--fff, #fff);
  d: path("m11.995 7.5l7.99 12H15.5v-1h2.56L12 9.5l-6.06 9H8.5v1H4z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="b809elbme"/><path clip-rule="evenodd" class="jmgtz_b3u"/><path class="rs09r5bia"/><path class="nbswwdxhy"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:klima-background",
	});
}

export default Component;
