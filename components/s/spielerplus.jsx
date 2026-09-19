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
		"content": `<style>.d_-w3fb5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24A21.5 21.5 0 1 1 24 2.5A21.5 21.5 0 0 1 45.5 24");
}

.v5teo6bak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.157 10.23h5.686v5.553h-5.686Zm-9.654 9.83v4.989h10.025V37.77h4.989V25.048h9.98V20.06Z");
}
</style><path class="d_-w3fb5b"/><path class="v5teo6bak"/>`,
		"fallback": "arcticons:spielerplus",
	});
}

export default Component;
