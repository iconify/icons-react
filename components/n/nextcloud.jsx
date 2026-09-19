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
		"content": `<style>.a_xgo4bwr {
  cx: 38.47px;
  cy: 24px;
  r: 5.03px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cj71dkbis {
  cx: 9.53px;
  cy: 24px;
  r: 5.03px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wv2flf2hg {
  cx: 24px;
  cy: 24px;
  r: 9.44px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="wv2flf2hg"/><circle class="cj71dkbis"/><circle class="a_xgo4bwr"/>`,
		"fallback": "arcticons:nextcloud",
	});
}

export default Component;
