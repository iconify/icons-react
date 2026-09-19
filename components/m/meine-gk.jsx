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
		"content": `<style>.wyyfy69vt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24c0 11.883-9.617 21.5-21.5 21.5S2.5 35.883 2.5 24S12.117 2.5 24 2.5c5.934 0 11.317 2.4 15.208 6.292L32.41 15.59A11.9 11.9 0 0 0 24 12.117c-6.56 0-11.883 5.323-11.883 11.883S17.44 35.883 24 35.883S35.883 30.56 35.883 24a11.8 11.8 0 0 0-1.088-4.98h10.124A21 21 0 0 1 45.5 24");
}
</style><path class="wyyfy69vt"/>`,
		"fallback": "arcticons:meine-gk",
	});
}

export default Component;
