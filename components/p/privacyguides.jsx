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
		"content": `<style>.oe8yy0a_s {
  cx: 33.713px;
  cy: 33.77px;
  r: 8.73px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t9--w3bup {
  cx: 20.535px;
  cy: 18.418px;
  r: 4.316px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v3hqvgpzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.377 25.064l2.097-13.113a2.467 2.467 0 0 0-1.77-2.776L21.003 5.564a1.74 1.74 0 0 0-.933 0L7.368 9.175a2.487 2.487 0 0 0-1.781 2.776L8.41 29.524a7.14 7.14 0 0 0 3.235 4.908l6.993 4.388a3.52 3.52 0 0 0 3.794 0l3.127-1.964");
}

.zljn4o0uq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.377 22.154v4.953a2.158 2.158 0 0 0 4.315 0v-4.95m6.372 11.406l3.364 3.364l5.538-6.592");
}
</style><path class="v3hqvgpzd"/><circle class="t9--w3bup"/><circle class="oe8yy0a_s"/><path class="zljn4o0uq"/>`,
		"fallback": "arcticons:privacyguides",
	});
}

export default Component;
