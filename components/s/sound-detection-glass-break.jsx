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
		"content": `<style>.hs5k8_ggt {
  fill: currentColor;
  d: path("M3 16V3h18v2.05l-7.5 8.425l-4-4zm0 5v-2l6.5-6.525l4 4L21 8.05V21z");
}
</style><path class="hs5k8_ggt"/>`,
		"fallback": "material-symbols:sound-detection-glass-break",
	});
}

export default Component;
