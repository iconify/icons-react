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
		"content": `<style>.kvipxlphh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 30.266s-12.787.383-26.213 8.695");
}

.ytpgwrbyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 28.475s-20.843.768-34.269 11.509l3.58-12.531L4.5 17.35h12.147l4.987-9.334l4.604 10.229h2.685");
}
</style><path class="kvipxlphh"/><path class="ytpgwrbyo"/>`,
		"fallback": "arcticons:star-rewards",
	});
}

export default Component;
