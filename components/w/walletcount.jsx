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
		"content": `<style>.kvngax1ai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.486 17H29a.757.757 0 0 0-.757.757v12.486c0 .418.339.757.757.757h15.486a.757.757 0 0 0 .757-.757V17.757a.757.757 0 0 0-.757-.757");
}

.yh3ez_4wc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 17V9.5a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4V31");
}

.z3nh--brh {
  cx: 34.743px;
  cy: 24px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="yh3ez_4wc"/><path class="kvngax1ai"/><circle class="z3nh--brh"/>`,
		"fallback": "arcticons:walletcount",
	});
}

export default Component;
