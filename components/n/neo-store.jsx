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
		"content": `<style>.m0glg7jal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.144 30.894A9.75 9.75 0 1 1 14.25 14.25c5.385 0 7.85 5.287 9.75 9.75c2.11 4.954 4.365 9.75 9.75 9.75a9.75 9.75 0 1 0-6.894-16.644");
}

.x-orwfvcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.696 28.804a5 5 0 1 0-3.946-.023M7.75 24h13m-11-4h9m-9 8h9m18.903-12.935l1.562-1.738m-9.368 1.738l-1.562-1.738");
}
</style><path class="m0glg7jal"/><path class="x-orwfvcl"/>`,
		"fallback": "arcticons:neo-store",
	});
}

export default Component;
