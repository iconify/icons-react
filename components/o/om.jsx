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
		"content": `<style>.zzyq9obwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.68 26.53H7a2.53 2.53 0 0 1 0-5.06h12.68a2.53 2.53 0 0 1 0 5.06m21.29 0H28.32a2.53 2.53 0 0 1 0-5.06H41a2.53 2.53 0 0 1 0 5.06Z");
}
</style><path class="zzyq9obwd"/>`,
		"fallback": "arcticons:om",
	});
}

export default Component;
