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
		"content": `<style>.q9icox8la {
  cx: 18.339px;
  cy: 37.839px;
  r: 5.661px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s50phcb6d {
  cx: 24px;
  cy: 16.452px;
  r: 11.952px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="q9icox8la"/><circle class="s50phcb6d"/>`,
		"fallback": "arcticons:public-app",
	});
}

export default Component;
