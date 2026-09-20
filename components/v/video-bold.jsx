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
		"content": `<style>.zpa-h3b7l {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 120H44V60h168Zm24 52a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h192a12 12 0 0 1 12 12m-132-80V88a12 12 0 0 1 18.36-10.18l32 20a12 12 0 0 1 0 20.36l-32 20A12 12 0 0 1 104 128");
}
</style><path class="zpa-h3b7l"/>`,
		"fallback": "ph:video-bold",
	});
}

export default Component;
