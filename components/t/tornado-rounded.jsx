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
		"content": `<style>.k36li8bag {
  fill: currentColor;
  d: path("M4.135 6.423L5.342 8.5h13.316l1.207-2.077q.46-.807.003-1.615T18.468 4H5.532q-.945 0-1.401.808t.003 1.615M5.915 9.5l2.327 4h7.516l2.327-4zm2.9 5l1.787 3.096q.46.808 1.398.808t1.398-.808l1.787-3.096z");
}
</style><path class="k36li8bag"/>`,
		"fallback": "material-symbols-light:tornado-rounded",
	});
}

export default Component;
