import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v51j4vbpa {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h12v12a12 12 0 0 0 24 0v-12h104v12a12 12 0 0 0 24 0v-12h12a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 188V60h168v52h-21.68a44 44 0 1 0 0 24H212v52Zm124-64a20 20 0 1 1-20-20a20 20 0 0 1 20 20");
}
</style><path class="v51j4vbpa"/>`,
		"fallback": "ph:vault-bold",
	});
}

export default Component;
