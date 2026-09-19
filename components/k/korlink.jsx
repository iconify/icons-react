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
		"content": `<style>.azirbjb3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 14.414h39v19.173h-39zm0 7.071h13.8m11.4 4.379h13.8");
}
</style><path class="azirbjb3k"/>`,
		"fallback": "arcticons:korlink",
	});
}

export default Component;
