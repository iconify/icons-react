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
		"content": `<style>.pf_y74bbn {
  fill: currentColor;
  d: path("M2 21V5h5.15L9 3h6l1.85 2H22v16zm6-4h8v-.55q0-1.125-1.1-1.787T12 14t-2.9.663T8 16.45zm5.413-4.587Q14 11.825 14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13t1.413-.587");
}
</style><path class="pf_y74bbn"/>`,
		"fallback": "material-symbols:photo-camera-front-sharp",
	});
}

export default Component;
