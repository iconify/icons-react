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
		"content": `<style>.sy28tfbol {
  cx: 18.514px;
  cy: 13.041px;
  r: 0.75px;
  fill: currentColor;
}

.tj8b-tbhb {
  cx: 29.486px;
  cy: 13.041px;
  r: 0.75px;
  fill: currentColor;
}

.xiqtjho2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.95 8.557l2.46-2.284m-24.819 0l2.46 2.284m24.131 12.685v8.076a14.182 14.182 0 0 1-28.364 0v-8.076m0-2.555v-.005A14.15 14.15 0 0 1 24 4.5h0a14.15 14.15 0 0 1 14.182 14.182v.005m.001 2.555H9.817m0-2.555h28.366");
}
</style><path class="xiqtjho2k"/><circle class="tj8b-tbhb"/><circle class="sy28tfbol"/>`,
		"fallback": "arcticons:labd",
	});
}

export default Component;
