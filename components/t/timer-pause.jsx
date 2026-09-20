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
		"content": `<style>.raxftabod {
  fill: currentColor;
  d: path("M9.385 2.5v-1h5.23v1zm-.497 17.874q-1.455-.626-2.546-1.716t-1.716-2.545T4 13t.626-3.113t1.716-2.545t2.546-1.716T12 5q1.454 0 2.812.52t2.492 1.469l1.092-1.093l.708.708l-1.092 1.092q.95 1.135 1.469 2.493T20 13q0 1.658-.626 3.113t-1.716 2.545t-2.546 1.716T12 21t-3.113-.626m.92-3.874h1v-7h-1zm3.385 0h1v-7h-1z");
}
</style><path class="raxftabod"/>`,
		"fallback": "material-symbols-light:timer-pause",
	});
}

export default Component;
