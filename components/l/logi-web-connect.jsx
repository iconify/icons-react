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
		"content": `<style>.et2orrbro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.748 5.381l14.078 21.03h-9.9l10.826 16.208L45.5 24.002L34.748 5.383z");
}

.u88g1ownm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.248 5.381L2.5 23.998l10.752 18.619l15 .002L14.174 21.59h9.9z");
}
</style><path class="et2orrbro"/><path class="u88g1ownm"/>`,
		"fallback": "arcticons:logi-web-connect",
	});
}

export default Component;
