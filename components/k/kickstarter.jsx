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
		"content": `<style>.vka2mra_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.97 24.009l3.547-3.523a9.33 9.33 0 0 0 0-13.24a9.485 9.485 0 0 0-13.33 0l-1.292 1.282a9.435 9.435 0 0 0-17.167 5.33v20.285a9.435 9.435 0 0 0 17.167 5.329l1.291 1.282a9.485 9.485 0 0 0 13.33 0a9.33 9.33 0 0 0 0-13.24z");
}
</style><path class="vka2mra_v"/>`,
		"fallback": "arcticons:kickstarter",
	});
}

export default Component;
