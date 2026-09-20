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
		"content": `<style>.gafsh3g3q {
  fill: currentColor;
  d: path("M7 17q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7q1.25 0 2.263.55T11 9h11v6H11q-.725.9-1.737 1.45T7 17m4.9-4H20v-2h-8.1q.05.225.075.5T12 12t-.025.5t-.075.5");
}
</style><path class="gafsh3g3q"/>`,
		"fallback": "material-symbols:switches-sharp",
	});
}

export default Component;
