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
		"content": `<style>.nh1_8ac8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24.45a5.666 5.666 0 0 0 4.698-8.834");
}

.qupm5fbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.466 18.784L24 13.689M24 44.5l12.535-25.716L24 3.5L11.466 18.784zm12.535-25.716L24 13.689M24 3.5v41");
}
</style><path class="qupm5fbeo"/><path class="nh1_8ac8z"/>`,
		"fallback": "arcticons:no-mans-sky",
	});
}

export default Component;
