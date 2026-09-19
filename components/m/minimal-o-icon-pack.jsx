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
		"content": `<style>.i7wdi9_uf {
  cx: 24px;
  cy: 24px;
  r: 12px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.vpr9y64nd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 36v6.5M12 24h24m-21.079 7.846l.537.06a78 78 0 0 0 17.084-.001l.533-.059m.004-15.692l-.537-.06a78 78 0 0 0-17.084.001l-.533.059");
}
</style><path class="i9clfwm2k"/><circle class="i7wdi9_uf"/><path class="vpr9y64nd"/>`,
		"fallback": "arcticons:minimal-o-icon-pack",
	});
}

export default Component;
