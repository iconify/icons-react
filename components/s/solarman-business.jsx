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
		"content": `<style>.gous_msfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.676 4.502s-14.88 13.565-14.88 24.99c.002 7.738 6.276 14.008 14.013 14.006c7.734-.003 14.003-6.271 14.005-14.005c0-8.15-9.187-14.321-9.187-14.321l-8.38 12.677h7.705L18.64 37.4m20.565 2.09a2 2 0 1 1 0 4h-3.3v-8h3.3a2 2 0 1 1 0 4m0 0h-3.3");
}
</style><path class="gous_msfb"/>`,
		"fallback": "arcticons:solarman-business",
	});
}

export default Component;
