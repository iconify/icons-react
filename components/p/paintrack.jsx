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
		"content": `<style>.dpz8t6bbg {
  cx: 14.034px;
  cy: 13.983px;
  r: 4.023px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.eusl20__u {
  cx: 14.034px;
  cy: 34.017px;
  r: 8.483px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.svvtke_2b {
  cx: 33.967px;
  cy: 13.983px;
  r: 8.483px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xdm04ubpl {
  cx: 14.034px;
  cy: 13.983px;
  r: 8.483px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zwrgk-bee {
  cx: 33.967px;
  cy: 34.017px;
  r: 8.483px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="xdm04ubpl"/><circle class="svvtke_2b"/><circle class="zwrgk-bee"/><circle class="eusl20__u"/><circle class="dpz8t6bbg"/>`,
		"fallback": "arcticons:paintrack",
	});
}

export default Component;
