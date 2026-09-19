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
		"content": `<style>.poc2rhbvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24h18.944L12.808 9.342h4.075L27.519 24L16.883 38.658h4.074L31.594 24L20.957 9.342h4.075L35.668 24L25.032 38.658h4.075L39.743 24H43.5");
}
</style><path class="poc2rhbvq"/>`,
		"fallback": "arcticons:plexamp",
	});
}

export default Component;
