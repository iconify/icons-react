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
		"content": `<style>.a1es8kb3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.19 8.375l19.31 8.574l-19.055 8.702l-11.434-5.208l-2.413 1.715l-.064 6.796l3.303 4.574l-.254 6.034l-4.446-4.383l-4.51 4.446l-.127-6.351l2.985-4.129l.064-8.638l1.715-1.525l-4.51-2.032z");
}

.ixmzffb0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.393 24.127l10.861 5.145l10.48-5.081v4.637l-10.48 5.017l-10.861-5.081z");
}
</style><path class="a1es8kb3x"/><path class="ixmzffb0k"/>`,
		"fallback": "arcticons:schulmanager",
	});
}

export default Component;
