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

.ncx_00bzm {
  fill: var(--svg-color--ffc524, #ffc524);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.q_woerbfg {
  fill: var(--svg-color--fff, #fff);
  d: path("M16.647 7.614a1.033 1.033 0 1 0 0-2.066a1.033 1.033 0 0 0 0 2.066");
}

.qcrkq7lke {
  fill: var(--svg-color--fff, #fff);
  d: path("M4.776 6.622L8.39 11.04V6.05a1.807 1.807 0 1 0-3.614 0zm14.272.828c.119-.295.18-.61.18-.927C19.228 5.13 18.072 4 16.646 4s-2.58 1.13-2.58 2.523c0 .31.056.607.16.88c.49 1.603 1.768 2.85 2.407 3.308c1.424-1.049 2.13-2.383 2.415-3.262");
}

.uy3zlziae {
  fill: var(--svg-color--fff, #fff);
  d: path("m8.256 10.84l-.16-5.776l9.966 12.016a1.773 1.773 0 0 1-.257 2.518a1.82 1.82 0 0 1-2.534-.26zm-3.48 6.828l3.614-4.29v4.816a1.807 1.807 0 0 1-3.614 0z");
}

.wt85njmra {
  fill: var(--svg-color--fff, #fff);
  d: path("m8.386 13.744l-3.614 4.064V6.052a1.807 1.807 0 1 1 3.614 0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ncx_00bzm"/><path class="wt85njmra"/><path class="uy3zlziae"/><path class="qcrkq7lke"/><path class="q_woerbfg"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:navi-background",
	});
}

export default Component;
