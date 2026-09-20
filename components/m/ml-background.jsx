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

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.qgpt01boe {
  fill: var(--svg-color--fff, #fff);
  d: path("m4 4l3.2 1.344v13.392L4 20zm4.267 6.4l3.2 1.344v5.392l-3.2 1.264zM20 20l-3.2-1.344V5.264L20 4zm-4.267-6.4l-3.2-1.344V6.864l3.2-1.264z");
}

.xd7tu58at {
  fill: var(--svg-color--11967f, #11967f);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="xd7tu58at"/><path class="qgpt01boe"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:ml-background",
	});
}

export default Component;
