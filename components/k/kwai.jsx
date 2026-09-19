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
		"content": `<style>.at144n6jw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.85 42.5h13.478a5.39 5.39 0 0 0 5.39-5.391v-7.764a5.39 5.39 0 0 0-5.39-5.391H20.85a5.39 5.39 0 0 0-5.39 5.39v7.765a5.39 5.39 0 0 0 5.39 5.391");
}

.rl0czdbzt {
  cx: 18.328px;
  cy: 13.261px;
  r: 7.761px;
}

.v7v_pok8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.46 30.594l-4.483-2.588c-1.198-.692-2.696.173-2.696 1.556v7.353c0 1.383 1.498 2.248 2.696 1.556l4.482-2.588");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zwl3aio_k {
  cx: 32.904px;
  cy: 14.206px;
  r: 6.815px;
}
</style><path class="at144n6jw"/><g class="y9tr6bcfx"><circle class="rl0czdbzt"/><circle class="zwl3aio_k"/></g><path class="v7v_pok8a"/>`,
		"fallback": "arcticons:kwai",
	});
}

export default Component;
