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
		"content": `<style>.n9gzu65yl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.74 39.68a1.64 1.64 0 0 1-1.93-1.32a1.2 1.2 0 0 1 0-.27V20.48a9.78 9.78 0 0 0-19.56 0v17.61a1.65 1.65 0 0 1-1.69 1.62a1.2 1.2 0 0 1-.27 0a9.73 9.73 0 0 1-.37-19v-.3a12.13 12.13 0 0 1 24.26 0v.3a9.73 9.73 0 0 1-.41 19Z");
}

.qlvhlsvzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.36 37.02V21.3l6.65 15.97l6.62-15.97l.01 15.66");
}
</style><path class="n9gzu65yl"/><path class="qlvhlsvzh"/>`,
		"fallback": "arcticons:materialplayer",
	});
}

export default Component;
