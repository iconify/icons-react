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
		"content": `<style>.k42l4pbta {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 17.833H5.5V5.5h37v12.333H30.167V42.5H42.5V30.167H17.833z");
}
</style><path class="k42l4pbta"/>`,
		"fallback": "arcticons:tokyo-gas",
	});
}

export default Component;
