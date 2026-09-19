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
		"content": `<style>.rje4vxduh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.55 5.43a2.05 2.05 0 0 0-2 2.05v22.58a2.05 2.05 0 0 0 2.05 2.06h6l11.59 8a1 1 0 0 0 1.57-.82v-7.18h15.69a2.05 2.05 0 0 0 2-2.06V7.48a2.05 2.05 0 0 0-2-2.05Zm1.08 6.13h32.74M7.63 18.77h32.74M7.63 25.99H20.9");
}
</style><path class="rje4vxduh"/>`,
		"fallback": "arcticons:nextcloudsms",
	});
}

export default Component;
