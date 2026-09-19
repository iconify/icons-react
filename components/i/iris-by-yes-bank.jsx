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
		"content": `<style>.glhwmqb5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.578 28.275v-8.55h2.787c1.575 0 2.853 1.285 2.853 2.871s-1.278 2.872-2.853 2.872h-2.787m2.787 0l2.787 2.805m7.364-.935c.522.683 1.176.937 2.087.937h1.26a2.13 2.13 0 0 0 2.124-2.133v-.01A2.13 2.13 0 0 0 32.863 24h-1.39a2.13 2.13 0 0 1-2.126-2.135h0c0-1.182.954-2.14 2.13-2.14h1.254c.91 0 1.565.254 2.087.937m-21.805-.937v8.55");
}

.sjsshtb4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4m16.282 14.225v8.55");
}
</style><path class="sjsshtb4n"/><path class="glhwmqb5f"/>`,
		"fallback": "arcticons:iris-by-yes-bank",
	});
}

export default Component;
