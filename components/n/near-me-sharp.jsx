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
		"content": `<style>.f6m2hp1_s {
  fill: currentColor;
  d: path("m13.13 19.346l-2.426-6.088l-6.089-2.466l-.038-.63l14.846-5.624l-5.661 14.808z");
}
</style><path class="f6m2hp1_s"/>`,
		"fallback": "material-symbols-light:near-me-sharp",
	});
}

export default Component;
