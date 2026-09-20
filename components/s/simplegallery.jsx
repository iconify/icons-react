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
		"content": `<style>.vwwtb373y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13 29.44a12.28 12.28 0 1 1 18.34-10.69a12.26 12.26 0 0 1-2.24 7.07");
}

.xb9ecdb4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.72 20.74l-3.27 4.34l-1.3-1.71a1 1 0 0 0-1.55 0L5.82 39a1.58 1.58 0 0 0 1.26 2.53h33.86A1.58 1.58 0 0 0 42.18 39l-9.37-12.46a1 1 0 0 0-1.56 0l-.8 1.07l-5.18-6.87a1 1 0 0 0-1.55 0");
}
</style><path class="vwwtb373y"/><path class="xb9ecdb4a"/>`,
		"fallback": "arcticons:simplegallery",
	});
}

export default Component;
