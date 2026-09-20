import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hdxpysbbn {
  d: path("M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.pgo0c5f-d {
  d: path("M3.808 22.193a1 1 0 0 1 0-1.415l16.97-16.97a1 1 0 1 1 1.414 1.414l-16.97 16.97a1 1 0 0 1-1.414 0");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="pgo0c5f-d"/><path class="hdxpysbbn"/></g>`,
		"fallback": "pepicons-pop:line-slant-up-circle",
	});
}

export default Component;
