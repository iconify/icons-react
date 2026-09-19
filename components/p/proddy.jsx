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
		"content": `<style>.f85dwcb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.839 24.301l2.175 3.224L37.686 21");
}

.kw0tm5yxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.922 34H14.5c-5.54 0-10-4.46-10-10s4.46-10 10-10h10.422");
}

.y9upghb-e {
  cx: 31.5px;
  cy: 24px;
  r: 12px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="kw0tm5yxx"/><circle class="y9upghb-e"/><path class="f85dwcb9a"/>`,
		"fallback": "arcticons:proddy",
	});
}

export default Component;
