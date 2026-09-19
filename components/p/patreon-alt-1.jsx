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
		"content": `<style>.cpyd0acsn {
  cx: 26.97px;
  cy: 17px;
  r: 12.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fd47q67hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.53 4.5v39");
}
</style><circle class="cpyd0acsn"/><path class="fd47q67hr"/>`,
		"fallback": "arcticons:patreon-alt-1",
	});
}

export default Component;
