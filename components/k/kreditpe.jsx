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
		"content": `<style>.d_c9odbgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.5C13.783 42.5 5.5 34.217 5.5 24V5.5C15.717 5.5 24 13.783 24 24c10.217 0 18.5-8.283 18.5-18.5H24z");
}

.ps0ge-28y {
  cx: 35.1px;
  cy: 35.1px;
  r: 7.4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="d_c9odbgx"/><circle class="ps0ge-28y"/>`,
		"fallback": "arcticons:kreditpe",
	});
}

export default Component;
