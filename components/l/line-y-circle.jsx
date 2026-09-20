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

.ju2nmkbzv {
  d: path("M13 4a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="ju2nmkbzv"/><path class="hdxpysbbn"/></g>`,
		"fallback": "pepicons-pop:line-y-circle",
	});
}

export default Component;
