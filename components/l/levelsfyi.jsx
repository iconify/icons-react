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
		"content": `<style>.y7yekevqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.46 7.983V42.5H8.504v-6.887h6.527v-6.728h6.848v-6.807h6.767V15.27h7.328V7.982zM29.887 5.5L5.539 30.007");
}
</style><path class="y7yekevqy"/>`,
		"fallback": "arcticons:levelsfyi",
	});
}

export default Component;
