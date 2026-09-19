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
		"content": `<style>.iabo-svil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5v-5.436c-8.872 0-16.064-7.192-16.064-16.064S15.128 7.936 24 7.936S40.064 15.128 40.064 24H45.5c0-11.874-9.626-21.5-21.5-21.5m0 0v43M2.5 24h43");
}
</style><path class="iabo-svil"/>`,
		"fallback": "arcticons:the-box",
	});
}

export default Component;
