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
		"content": `<style>.anb_4lzon {
  fill: currentColor;
  d: path("M2 21V5h5.15L9 3h6l1.85 2H22v16zm2-2h16V7h-4.05l-1.825-2h-4.25L8.05 7H4zm4-2h8v-.55q0-1.125-1.1-1.787T12 14t-2.9.663T8 16.45zm5.413-4.587Q14 11.825 14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13t1.413-.587");
}
</style><path class="anb_4lzon"/>`,
		"fallback": "material-symbols:photo-camera-front-outline-sharp",
	});
}

export default Component;
