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
		"content": `<style>.vcq7wer-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 15.402H22v15.5m0-15.5l-17.5 17.5m37-.304H26v-15.5m0 15.5l17.5-17.5");
}
</style><path class="vcq7wer-a"/>`,
		"fallback": "arcticons:orange-money",
	});
}

export default Component;
