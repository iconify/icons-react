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
		"content": `<style>.jfvhwubwm {
  fill: currentColor;
  d: path("M5 20v-5.115h1V19h12v-4.115h1V20zm-2-7.5v-1h2V4h14v7.5h2v1zM18 19H6z");
}
</style><path class="jfvhwubwm"/>`,
		"fallback": "material-symbols-light:split-scene-up-outline-sharp",
	});
}

export default Component;
