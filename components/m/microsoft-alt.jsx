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
		"content": `<style>.v4pmfntfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.5 5.5h17v17h-17zm0 20h17v17h-17zm-20-20h17v17h-17zm0 20h17v17h-17z");
}
</style><path class="v4pmfntfv"/>`,
		"fallback": "arcticons:microsoft-alt",
	});
}

export default Component;
