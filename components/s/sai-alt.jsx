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
		"content": `<style>.gsno7hb6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.914 43.5l6.957-7.64H16.956zm0-7.64V17.929L37.343 4.5m-17.098 9.761l-9.588-9.588");
}
</style><path class="gsno7hb6c"/>`,
		"fallback": "arcticons:sai-alt",
	});
}

export default Component;
