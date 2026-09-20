import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dt122ccgt {
  fill: currentColor;
  d: path("M3.5 20q-.213 0-.356-.144T3 19.499t.144-.356T3.5 19H5V5.616q0-.667.475-1.141T6.615 4h10.77q.666 0 1.14.475T19 5.615V19h1.5q.213 0 .356.144t.144.357t-.144.356T20.5 20zm6.25-1h4.5V5h-4.5z");
}
</style><path class="dt122ccgt"/>`,
		"fallback": "material-symbols-light:vertical-shades-rounded",
	});
}

export default Component;
