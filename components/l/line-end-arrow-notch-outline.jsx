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
		"content": `<style>.kmf5k0k8q {
  fill: currentColor;
  d: path("m11 19l3.425-6H2v-2h12.425L11 5l11 7z");
}
</style><path class="kmf5k0k8q"/>`,
		"fallback": "material-symbols:line-end-arrow-notch-outline",
	});
}

export default Component;
