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
		"content": `<style>.ruf36nbih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.666 19.284C19.02 34.394 36.843 42.5 36.843 42.5");
}

.tw8i3ug3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.928 12.895h34.144m-17.072 0V5.5m10.3 7.395c-2.087 20.742-23.367 29.489-23.367 29.489");
}
</style><path class="tw8i3ug3m"/><path class="ruf36nbih"/>`,
		"fallback": "arcticons:rin",
	});
}

export default Component;
