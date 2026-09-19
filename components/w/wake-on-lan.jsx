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
		"content": `<style>.eucol4b-l {
  d: path("M28.662 11.167a16.503 16.503 0 1 1-9.016-.088");
}

.s8ud4iiwq {
  d: path("M24.004 4.5h.096v25.18h-.096z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="eucol4b-l"/><path class="s8ud4iiwq"/></g>`,
		"fallback": "arcticons:wake-on-lan",
	});
}

export default Component;
