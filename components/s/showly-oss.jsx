import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v3i3q32ia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.771 32.003c1.226 1.596 2.764 2.191 4.904 2.191h2.96a4.99 4.99 0 0 0 4.99-4.989v-.021a4.99 4.99 0 0 0-4.99-4.99H22.37a4.995 4.995 0 0 1-4.995-4.994h0a5.005 5.005 0 0 1 5.005-5.006h2.945c2.14 0 3.678.595 4.904 2.192");
}

.wvvvvlb-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.745h39v24.897h-39zm4.788 27.51h29.424");
}
</style><path class="wvvvvlb-u"/><path class="v3i3q32ia"/>`,
		"fallback": "arcticons:showly-oss",
	});
}

export default Component;
