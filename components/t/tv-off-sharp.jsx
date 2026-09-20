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
		"content": `<style>.ddndqqb9g {
  fill: currentColor;
  d: path("M21.325 18.475L5.85 3H22v15.475zm-18.15-15.3v2.8L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-4.3-4.3H16v2H8v-2H2V3.175z");
}
</style><path class="ddndqqb9g"/>`,
		"fallback": "material-symbols:tv-off-sharp",
	});
}

export default Component;
