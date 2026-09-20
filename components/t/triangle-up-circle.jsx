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
		"content": `<style>.asxrf7cqm {
  d: path("M13 10.002L8.963 17h8.074zm.866-2.5a1 1 0 0 0-1.732 0L6.365 17.5a1 1 0 0 0 .866 1.5H18.77a1 1 0 0 0 .866-1.5z");
}

.hdxpysbbn {
  d: path("M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="asxrf7cqm"/><path class="hdxpysbbn"/></g>`,
		"fallback": "pepicons-pop:triangle-up-circle",
	});
}

export default Component;
