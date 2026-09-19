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
		"content": `<style>.xh1u-3bon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.426 19.656l-9.81 9.81l6.54 6.541c-7.225 7.225-18.938 7.225-26.163 0s-7.225-18.937 0-26.162l13.08 13.08l-18.5 18.5M28.344 6.574l-7.358 7.358");
}
</style><path class="xh1u-3bon"/>`,
		"fallback": "arcticons:shell-recharge",
	});
}

export default Component;
