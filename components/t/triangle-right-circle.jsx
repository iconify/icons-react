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
		"content": `<style>.gcumnkprh {
  d: path("M15.998 13L9 8.963v8.074zm2.5.866a1 1 0 0 0 0-1.732L8.5 6.365a1 1 0 0 0-1.5.866V18.77a1 1 0 0 0 1.5.866z");
}

.hdxpysbbn {
  d: path("M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="gcumnkprh"/><path class="hdxpysbbn"/></g>`,
		"fallback": "pepicons-pop:triangle-right-circle",
	});
}

export default Component;
