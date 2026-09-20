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
		"content": `<style>.bgpe15btd {
  fill: currentColor;
  d: path("M20 17.5v-11h1v11zm-7.673-.212l-.713-.688l4.1-4.1H3v-1h12.694l-4.056-4.1l.689-.688L17.616 12z");
}
</style><path class="bgpe15btd"/>`,
		"fallback": "material-symbols-light:keyboard-tab-outline-sharp",
	});
}

export default Component;
