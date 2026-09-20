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

.ko1h2xe1r {
  d: path("M9.75 6a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2m6.5 0a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="ko1h2xe1r"/><path class="hdxpysbbn"/></g>`,
		"fallback": "pepicons-pop:pause-circle",
	});
}

export default Component;
