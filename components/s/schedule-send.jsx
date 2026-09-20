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
		"content": `<style>.jihrawbej {
  fill: currentColor;
  d: path("M3 20v-6l8-2l-8-2V4l14.3 6H17q-2.925 0-4.962 2.063T10 17.05zm10.463.538Q12 19.075 12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463m5.187-1.187l.7-.7l-1.85-1.85V14h-1v3.2z");
}
</style><path class="jihrawbej"/>`,
		"fallback": "material-symbols:schedule-send",
	});
}

export default Component;
