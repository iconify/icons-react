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
		"content": `<style>.nrod_x3zg {
  fill: currentColor;
  d: path("M11.89 15.35c0-1.3-2.59-1.95-3.89-1.95s-3.89.65-3.89 1.95V16h7.78z");
}

.tspydm7fo {
  fill: currentColor;
  d: path("M21 5h2v14h-2zm-4 0h2v14h-2zm-3 0H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m-1 12H3V7h10z");
}

.xyka2mboc {
  cx: 8px;
  cy: 9.94px;
  r: 1.95px;
  fill: currentColor;
}
</style><path class="tspydm7fo"/><circle class="xyka2mboc"/><path class="nrod_x3zg"/>`,
		"fallback": "ic:outline-recent-actors",
	});
}

export default Component;
