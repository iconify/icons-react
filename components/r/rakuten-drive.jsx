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
		"content": `<style>.fjlpu7eno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20 43.5c10.77 0 19.5-8.73 19.5-19.5S30.77 4.5 20 4.5H8.5v39zm6.761-12.739l7.027 7.027m.001-27.577l-7.027 7.027");
}

.lqcmi38ws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.5 14.5H20c5.365 0 9.5 4.135 9.5 9.5s-4.135 9.5-9.5 9.5h-1.5z");
}

.xi9orznsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 17.5h10v-13m-10 26h10v13");
}
</style><path class="lqcmi38ws"/><path class="fjlpu7eno"/><path class="xi9orznsr"/>`,
		"fallback": "arcticons:rakuten-drive",
	});
}

export default Component;
