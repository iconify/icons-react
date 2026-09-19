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
		"content": `<style>.qkxe90bfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.706 11.006L5.5 36.995h30.037l6.963-25.99z");
}

.z9lqp6bae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.184 15.013l-9.852 10.491h4.076l-2.279 7.127l9.627-10.195h-4.14z");
}
</style><path class="qkxe90bfg"/><path class="z9lqp6bae"/>`,
		"fallback": "arcticons:mysolaredge",
	});
}

export default Component;
