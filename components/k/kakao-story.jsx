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
		"content": `<style>.r7zhvgbgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.677 43.5h22.646M17.707 33.44l8.808 3.767q7.545-8.809 7.545-18.869V4.5H13.94v15.102h8.797Q24 27.147 17.707 33.44");
}
</style><path class="r7zhvgbgr"/>`,
		"fallback": "arcticons:kakao-story",
	});
}

export default Component;
