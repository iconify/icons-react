import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.rjqehzb3k {
  d: path("M10 11.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3");
}

.tfkx_ucmc {
  d: path("M2.5 8.123C2.5 12.366 6.882 19.5 10 19.5s7.5-7.134 7.5-11.377C17.5 3.917 14.146.5 10 .5S2.5 3.917 2.5 8.123m13 0c0 3.28-3.745 9.377-5.5 9.377s-5.5-6.097-5.5-9.377C4.5 5.013 6.967 2.5 10 2.5s5.5 2.513 5.5 5.623");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="rjqehzb3k"/><path class="tfkx_ucmc"/></g>`,
		"fallback": "pepicons-pop:pinpoint",
	});
}

export default Component;
