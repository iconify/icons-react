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

.ns5w2cckk {
  fill: var(--svg-color--fff, #fff);
  d: path("M6.854 4a2.11 2.11 0 0 0-2.108 2.108v12.025a1.866 1.866 0 1 0 3.733 0V7.2h7.467l3.2-3.2z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.tkawiiblc {
  fill: var(--svg-color--69e2a5, #69e2a5);
  d: path("M24 0H0v24h24z");
}

.zrvhxz_ny {
  fill: var(--svg-color--fff, #fff);
  d: path("M19.147 8.715V4.013l-8.084 7.978a1.47 1.47 0 0 0-.012 2.078l5.296 5.361a1.697 1.697 0 1 0 2.419-2.381l-3.646-3.715a.44.44 0 0 1 .002-.617z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="tkawiiblc"/><path class="ns5w2cckk"/><path class="zrvhxz_ny"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:req-background",
	});
}

export default Component;
