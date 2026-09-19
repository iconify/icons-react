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
		"content": `<style>.vmpkr1jzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.643 5.5l6.7 12.601l14.055-2.478l-9.914 10.266l6.7 12.601l-12.827-6.256L16.443 42.5l1.986-14.133l-12.827-6.256l14.055-2.478zm14.146 16.967l-6.344 1.118m9.648-4.54l-7.859 1.386");
}
</style><path class="vmpkr1jzb"/>`,
		"fallback": "arcticons:sonic-forces",
	});
}

export default Component;
