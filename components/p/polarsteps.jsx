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
		"content": `<style>.bewe4obwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.8 21.2c1-.4 2.1-.3 3 .3c.2.1.4.2.6.1l2.4-1c.5-.2.7-.9.3-1.3L18.8 8.9c-.7-.7-2-.2-2 .8l.2 14.5c0 .6.6 1 1.1.7l2.4-1c.2-.1.3-.3.4-.5c.2-.9.9-1.8 1.9-2.2m2.4 5.6c1-.4 1.7-1.3 1.8-2.4c0-.2.2-.4.4-.5l2.4-1c.5-.2 1.1.2 1.1.7l.2 14.5c0 1-1.2 1.6-2 .8L19 28.8c-.4-.4-.3-1.1.3-1.3l2.4-1c.2-.1.4 0 .6.1c.8.5 1.9.7 2.9.2");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="bewe4obwz"/>`,
		"fallback": "arcticons:polarsteps",
	});
}

export default Component;
