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
		"content": `<style>.uhahi1bel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 6.838L36.02 35.42l-14.433-4.528l11.827-14.75l-15.731 13.57L5.5 25.407ZM28.573 33.09l-7.154 8.073l.168-10.27");
}
</style><path class="uhahi1bel"/>`,
		"fallback": "arcticons:sagernet",
	});
}

export default Component;
