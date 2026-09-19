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
		"content": `<style>.ed2dvjbsg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-28a5 5 0 0 1-5-5v-28a4 4 0 0 1 4-4");
}

.kqs4rcmpp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.499 13.66L23.97 25L5.5 13.66m.115 7.248l34.303 20.975M42.5 20.85L24.03 32.13");
}
</style><path class="ed2dvjbsg"/><path class="kqs4rcmpp"/>`,
		"fallback": "arcticons:skiff-mail",
	});
}

export default Component;
