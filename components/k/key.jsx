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
		"content": `<style>.ekup168ny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 32.55V24h0h-21.91m16.3 4.93V24");
}

.i5rwi4sts {
  cx: 13.05px;
  cy: 24px;
  r: 8.55px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="i5rwi4sts"/><path class="ekup168ny"/>`,
		"fallback": "arcticons:key",
	});
}

export default Component;
