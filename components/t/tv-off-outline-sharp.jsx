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
		"content": `<style>.uth4fktpq {
  fill: currentColor;
  d: path("M21.325 18.475L20 17.15V5H7.85l-2-2H22v15.475zm-18.15-15.3L5 5H4v12h10.15L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-4.3-4.3H16v2H8v-2H2V3.175zm10.8 7.95");
}
</style><path class="uth4fktpq"/>`,
		"fallback": "material-symbols:tv-off-outline-sharp",
	});
}

export default Component;
