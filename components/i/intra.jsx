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
		"content": `<style>.gwpkjccoj {
  cx: 24px;
  cy: 19.218px;
  r: 10.561px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ptzg8vaxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 39.343l19.5-19.5l19.5 19.5z");
}
</style><circle class="gwpkjccoj"/><path class="ptzg8vaxz"/>`,
		"fallback": "arcticons:intra",
	});
}

export default Component;
