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
		"content": `<style>.ounswac7d {
  fill: currentColor;
  d: path("M5 20v-5.115h1V19h12v-4.115h1V20zm-2-7.5v-1h2V4h14v7.5h2v1zm3-1h12V5H6zM18 19H6zm0-14H6z");
}
</style><path class="ounswac7d"/>`,
		"fallback": "material-symbols-light:split-scene-2-outline-sharp",
	});
}

export default Component;
