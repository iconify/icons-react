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
		"content": `<style>.brmof2bgs {
  fill: currentColor;
  d: path("M11.808 16.827L4.212 12l7.596-4.827L9.402 11.5H21.5v1H9.402z");
}
</style><path class="brmof2bgs"/>`,
		"fallback": "material-symbols-light:line-start-arrow-notch-sharp",
	});
}

export default Component;
