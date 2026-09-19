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
		"content": `<style>.vkfli2bgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.232 11.573l-3.5-6.073l-28.51 8.093l21.41 9.413L15.14 42.5l26.638-7.162v-1.982");
}
</style><path class="vkfli2bgh"/>`,
		"fallback": "arcticons:virustotal-mobile",
	});
}

export default Component;
