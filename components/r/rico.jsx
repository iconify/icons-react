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
		"content": `<style>.ysrv3-b4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.289 18.353c-3.155-3.119-8.269-3.119-11.424 0a7.923 7.923 0 0 0 0 11.294c3.155 3.119 8.269 3.119 11.423 0l11.423-11.294c3.155-3.119 8.269-3.119 11.424 0a7.923 7.923 0 0 1 0 11.294c-3.155 3.119-8.269 3.119-11.423 0L24 24");
}
</style><path class="ysrv3-b4q"/>`,
		"fallback": "arcticons:rico",
	});
}

export default Component;
