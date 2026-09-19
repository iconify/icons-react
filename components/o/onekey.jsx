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
		"content": `<style>.x-dzenbnf {
  cx: 24px;
  cy: 33.557px;
  r: 8.943px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z9r-ch8ck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 20.09V5.5h-5.218");
}
</style><circle class="x-dzenbnf"/><path class="z9r-ch8ck"/>`,
		"fallback": "arcticons:onekey",
	});
}

export default Component;
