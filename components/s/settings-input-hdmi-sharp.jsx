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
		"content": `<style>.mk3z1k03c {
  fill: currentColor;
  d: path("M8 22v-3l-3-6V7h1V2h12v5h1v6l-3 6v3zM8 7h2V5h1v2h2V5h1v2h2V4H8z");
}
</style><path class="mk3z1k03c"/>`,
		"fallback": "material-symbols:settings-input-hdmi-sharp",
	});
}

export default Component;
