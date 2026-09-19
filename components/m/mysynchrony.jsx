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
		"content": `<style>.ayyoft3nl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.375 4.5h7.5v39h-7.5zm10.5 0h7.5v19h-7.5zm-21.25 20h7.5v19h-7.5z");
}
</style><path class="ayyoft3nl"/>`,
		"fallback": "arcticons:mysynchrony",
	});
}

export default Component;
