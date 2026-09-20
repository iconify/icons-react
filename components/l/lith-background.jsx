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
		"content": `<style>.asa-xwbjg {
  fill: var(--svg-color--fff, #fff);
  d: path("M16.857 10.286a3.143 3.143 0 1 0 0-6.286a3.143 3.143 0 0 0 0 6.286");
}

.etk2vsgif {
  fill: var(--svg-color--e96036, #e96036);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.fwvmx67_s {
  fill: var(--svg-color--000, #000);
  d: path("M7.143 20a3.143 3.143 0 1 0 0-6.286a3.143 3.143 0 0 0 0 6.286m9.714 0a3.143 3.143 0 1 0 0-6.286a3.143 3.143 0 0 0 0 6.286");
}

.ola8u7a8t {
  fill: var(--svg-color--000, #000);
  d: path("M7.143 10.286a3.143 3.143 0 1 0 0-6.286a3.143 3.143 0 0 0 0 6.286");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="etk2vsgif"/><path class="ola8u7a8t"/><path class="asa-xwbjg"/><path class="fwvmx67_s"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:lith-background",
	});
}

export default Component;
