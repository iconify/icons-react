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
		"content": `<style>.gm_buhhvf {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m29.52 146.39a4 4 0 0 1-3.66 5.61h-51.72a4 4 0 0 1-3.66-5.61L112 139.72a32 32 0 1 1 32 0Z");
}
</style><path class="gm_buhhvf"/>`,
		"fallback": "ph:keyhole-fill",
	});
}

export default Component;
