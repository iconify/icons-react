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
		"content": `<style>.a9vk-834i {
  cx: 29.098px;
  cy: 23.177px;
  r: 2.206px;
}

.uuwvnrb2d {
  d: path("m15.37 36.563l1.982-1.09V43.5m17.593-2.772a2.664 2.664 0 0 1-2.676 2.676h0c-1.486 0-2.676-1.19-2.676-2.577v-2.675c0-1.487 1.19-2.676 2.676-2.577h0a2.56 2.56 0 0 1 2.577 2.577h0m-13.702 4.555c.595.496 1.09.694 2.379.694h.198a2.2 2.2 0 0 0 2.18-2.18h0a2.2 2.2 0 0 0-2.18-2.18h-2.676v-3.469h4.856");
}

.wyezrmb1e {
  cx: 24px;
  cy: 16.957px;
  r: 12.457px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="wyezrmb1e"/><circle class="a9vk-834i"/><path class="uuwvnrb2d"/></g>`,
		"fallback": "arcticons:jrpn15c",
	});
}

export default Component;
