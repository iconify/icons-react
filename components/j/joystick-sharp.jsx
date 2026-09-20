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
		"content": `<style>.ka8ngjbxs {
  fill: currentColor;
  d: path("M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l8 4.6v4.25l-8 4.6Q12.525 22 12 22t-1-.275l-8-4.6v-4.25zM6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z");
}
</style><path class="ka8ngjbxs"/>`,
		"fallback": "material-symbols:joystick-sharp",
	});
}

export default Component;
