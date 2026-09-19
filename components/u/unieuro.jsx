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
		"content": `<style>.lpv37wbgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.178 16.352a6.339 6.339 0 1 0-12.678 0c0 3.5 0 13.091 6.339 13.091s6.339-9.59 6.339-13.091M34.163 5.948a8.337 8.337 0 0 0-8.337 8.337c0 11.506-2.368 15.224-4.814 18.07c-2.613 3.04-5.315 3.186-5.315 6.554c0 2.409 2.251 3.143 7.304 3.143c8.337 0 19.499-7.165 19.499-27.767a8.337 8.337 0 0 0-8.337-8.337");
}
</style><path class="lpv37wbgk"/>`,
		"fallback": "arcticons:unieuro",
	});
}

export default Component;
