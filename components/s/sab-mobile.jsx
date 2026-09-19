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
		"content": `<style>.oqesmhnro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m3.5 24l10.25 10.25l20.5-20.5L44.5 24L34.25 34.25l-20.5-20.5z");
}

.wscgdub1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.75 13.75h20.5v20.5h-20.5z");
}
</style><path class="wscgdub1g"/><path class="oqesmhnro"/>`,
		"fallback": "arcticons:sab-mobile",
	});
}

export default Component;
