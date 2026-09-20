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
		"content": `<style>.xu-ew2bqk {
  fill: currentColor;
  d: path("M5 22v-6h2v-5H5V5h5V4H9V2h6v2h-1v1h5v6h-2v5h2v6z");
}
</style><path class="xu-ew2bqk"/>`,
		"fallback": "material-symbols:water-bottle-large-sharp",
	});
}

export default Component;
