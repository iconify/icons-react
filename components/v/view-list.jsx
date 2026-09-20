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
		"content": `<style>.u2_fvl-wz {
  fill: currentColor;
  d: path("M9 20h11q.825 0 1.413-.587T22 18v-2H9zM2 8h5V4H4q-.825 0-1.412.588T2 6zm0 6h5v-4H2zm2 6h3v-4H2v2q0 .825.588 1.413T4 20m5-6h13v-4H9zm0-6h13V6q0-.825-.587-1.412T20 4H9z");
}
</style><path class="u2_fvl-wz"/>`,
		"fallback": "material-symbols:view-list",
	});
}

export default Component;
