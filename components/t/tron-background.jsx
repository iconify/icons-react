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
		"content": `<style>.ewir0ibek {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M5.261 4.165a.5.5 0 0 1 .492-.15l10.58 2.59a.5.5 0 0 1 .176.082l2.153 1.57a.504.504 0 0 1 .12.687L11.374 19.78a.5.5 0 0 1-.887-.116L5.161 4.669a.5.5 0 0 1 .1-.503m1.746 2.705l3.697 10.41l.609-5.394zm5.296 5.19l-.618 5.488l5.23-7.653zm5.084-3.494l-3.37 1.582l2.258-2.392zm-2.13-1.194L7.032 5.361l4.823 5.616z");
}

.ft5dv1b6b {
  fill: none;
}

.jh-hgcbaa {
  fill: var(--svg-color--c4342b, #c4342b);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="jh-hgcbaa"/><path clip-rule="evenodd" class="ewir0ibek"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:tron-background",
	});
}

export default Component;
