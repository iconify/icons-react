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
		"content": `<style>.afs69qbhv {
  fill: currentColor;
  d: path("M4 22V2h16v20zm2-11h4v-1h4v1h4V4H6zm0 2v7h12v-7zm0 7h12z");
}
</style><path class="afs69qbhv"/>`,
		"fallback": "material-symbols:sensor-window-outline-sharp",
	});
}

export default Component;
