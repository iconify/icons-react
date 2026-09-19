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
		"content": `<style>.n3oz6-biu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 6.884h39m-39 34.232h39m-39-4.279h39M4.5 24h39m-39 4.279h14.838M4.5 32.558h14.838M4.5 15.442h25.365M4.5 11.163h25.365M4.5 19.721h25.365");
}
</style><path class="n3oz6-biu"/>`,
		"fallback": "arcticons:liveboot",
	});
}

export default Component;
