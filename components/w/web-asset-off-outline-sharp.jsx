import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jhhigpbtv {
  fill: currentColor;
  d: path("M21.104 22.53L17.573 19H3V5h2v1.427l-3.12-3.12l.714-.713l19.223 19.223zM4 18h12.573l-10-10H4zm17 .189l-1-1V8h-9.188l-3-3H21z");
}
</style><path class="jhhigpbtv"/>`,
		"fallback": "material-symbols-light:web-asset-off-outline-sharp",
	});
}

export default Component;
