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

.k-rlujbnp {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.324 17.495h2.264L10.528 20H9.262l-3.77-4.456l4.64-8.299l1.399 2.386l-3.138 5.608z");
}

.nk5ieivzt {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.64 6.328L11.948 4l6.56 11.521L14.725 20H11.7l3.884-4.773c-1.657-2.961-3.323-5.917-4.944-8.899");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.sfgfvmtea {
  fill: var(--svg-color--0288d1, #0288d1);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="sfgfvmtea"/><path class="nk5ieivzt"/><path class="k-rlujbnp"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:lsk-background",
	});
}

export default Component;
