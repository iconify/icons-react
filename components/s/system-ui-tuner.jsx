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
		"content": `<style>.fnlo-83dm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.75 4.5h-15.5a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2M23.91 11l-2.07 2.07a2.93 2.93 0 1 0 4.14 0Zm0 .04v7.08");
}
</style><path class="fnlo-83dm"/>`,
		"fallback": "arcticons:system-ui-tuner",
	});
}

export default Component;
