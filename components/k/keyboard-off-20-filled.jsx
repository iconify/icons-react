import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q4n57mksg {
  fill: currentColor;
  d: path("M2.146 2.147a.5.5 0 0 1 .708 0l15 15a.5.5 0 0 1-.707.707L14.293 15H3.5A1.5 1.5 0 0 1 2 13.5v-8a1.5 1.5 0 0 1 1.307-1.486l-1.16-1.16a.5.5 0 0 1 0-.707M16.5 4A1.5 1.5 0 0 1 18 5.5v8c0 .644-.406 1.19-.976 1.403L6.121 4zm-11 8a.5.5 0 0 0 0 1h6.793l-1-1zm1.498-3a.753.753 0 1 0 0 1.506a.753.753 0 0 0 0-1.506m6.009 0a.752.752 0 1 0 0 1.504a.752.752 0 0 0 0-1.504M5.502 6.5a.752.752 0 1 0 0 1.505a.752.752 0 0 0 0-1.505m6 0a.752.752 0 1 0 0 1.505a.752.752 0 0 0 0-1.505m3 0a.752.752 0 1 0 0 1.505a.752.752 0 0 0 0-1.505");
}
</style><path class="q4n57mksg"/>`,
		"fallback": "fluent:keyboard-off-20-filled",
	});
}

export default Component;
