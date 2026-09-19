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
		"content": `<style>.h5jjeib_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.708 7.542v14.18h-2.874c-2.111 0-3.997 1.545-4.198 3.647a4.044 4.044 0 0 0 4.025 4.44h3.35a4.043 4.043 0 0 0 4.043-4.043V12.25l14.983 6.874v10.854L15.63 37.109c-1.021.375-1.808 1.275-1.91 2.358a2.76 2.76 0 0 0 3.44 2.942l19.173-5a4.08 4.08 0 0 0 3.05-3.947v-16.93a2.04 2.04 0 0 0-1.19-1.853l-19.595-8.99a2.04 2.04 0 0 0-2.89 1.853");
}
</style><path class="h5jjeib_b"/>`,
		"fallback": "arcticons:simpmusic",
	});
}

export default Component;
