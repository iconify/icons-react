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
		"content": `<style>.gh1n5fb0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.125 19.125V43.5l16.25-24.375z");
}

.qk3j65bku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.625 4.5h16.25v24.375h-16.25z");
}
</style><path class="qk3j65bku"/><path class="gh1n5fb0j"/>`,
		"fallback": "arcticons:sock8",
	});
}

export default Component;
