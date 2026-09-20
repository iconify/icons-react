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
		"content": `<style>.kqi41_aza {
  fill: currentColor;
  d: path("M7.096 14.866h9.789L12 6.73zm1.398 5.433q-1.642-.701-2.867-1.926t-1.926-2.867T3 12t.701-3.506t1.926-2.857T8.494 3.71T12 3t3.506.71t2.857 1.927t1.926 2.857T21 12t-.71 3.506t-1.926 2.867t-2.858 1.926T12 21t-3.506-.701");
}
</style><path class="kqi41_aza"/>`,
		"fallback": "material-symbols-light:triangle-circle",
	});
}

export default Component;
