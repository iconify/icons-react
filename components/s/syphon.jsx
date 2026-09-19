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
		"content": `<style>.g_woxrbde {
  d: path("M40.1 16.5v13.4c0 1.2-.6 2.3-1.7 2.9l-11.6 6.7M14 9.8L22.4 5c1-.6 2.3-.6 3.3 0l11.4 6.6M21.2 39.5L8.1 32");
}

.nlm558pgq {
  d: path("M32.8 28.9L25 33.4c-.6.4-1.4.4-2 0l-7.8-4.5c-.6-.4-1-1-1-1.8V18c0-.7.4-1.4 1-1.8l7.8-4.5c.6-.4 1.4-.4 2 0l7.8 4.5c.6.4 1 1 1 1.8v9.1c.1.7-.3 1.4-1 1.8");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z5wetzsgo {
  d: path("M7.9 13.5v30l13.3-2");
}
</style><g class="y9tr6bcfx"><path class="g_woxrbde"/><path class="nlm558pgq"/><path class="z5wetzsgo"/></g>`,
		"fallback": "arcticons:syphon",
	});
}

export default Component;
