import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q_j9gabts {
  fill: currentColor;
  d: path("M12.766 9.278a1.5 1.5 0 0 0-2.266 1.29v6.864a1.5 1.5 0 0 0 2.266 1.29l6.505-3.862a1 1 0 0 0 0-1.72zM2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14M14 3.5C8.201 3.5 3.5 8.201 3.5 14S8.201 24.5 14 24.5S24.5 19.799 24.5 14S19.799 3.5 14 3.5");
}
</style><path class="q_j9gabts"/>`,
		"fallback": "fluent:play-circle-28-regular",
	});
}

export default Component;
