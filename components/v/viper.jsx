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
		"content": `<style>.s_2lkdd9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.22 42.26L5.5 5.74h13.9l9.15 17.85l8.38-17.75h5.57Zm4.33-18.67l2.55 4.96");
}
</style><path class="s_2lkdd9j"/>`,
		"fallback": "arcticons:viper",
	});
}

export default Component;
