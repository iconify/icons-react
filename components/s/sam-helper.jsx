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
		"content": `<style>.wkxw5hbfm {
  cx: 24px;
  cy: 24px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x096eu89c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27 24h14.26a1.24 1.24 0 0 0 1.24-1.24h0a9.25 9.25 0 0 0-18.332-1.752M21 24H6.74a1.24 1.24 0 0 0-1.24 1.24a9.25 9.25 0 0 0 18.336 1.735M24 27v14.25a1.24 1.24 0 0 0 1.23 1.25h.02a9.25 9.25 0 0 0 9.25-9.25h0a9.25 9.25 0 0 0-7.525-9.088M24 21V6.74a1.24 1.24 0 0 0-1.24-1.24h-.01a9.25 9.25 0 0 0-1.723 18.338");
}
</style><path class="x096eu89c"/><circle class="wkxw5hbfm"/>`,
		"fallback": "arcticons:sam-helper",
	});
}

export default Component;
