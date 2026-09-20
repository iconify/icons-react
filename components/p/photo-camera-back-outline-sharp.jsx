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
		"content": `<style>.rrqt0552i {
  fill: currentColor;
  d: path("M2 21V5h5.15L9 3h6l1.85 2H22v16zm2-2h16V7h-4.05l-1.825-2h-4.25L8.05 7H4zm2-2h12l-3.75-5l-3 4L9 13z");
}
</style><path class="rrqt0552i"/>`,
		"fallback": "material-symbols:photo-camera-back-outline-sharp",
	});
}

export default Component;
