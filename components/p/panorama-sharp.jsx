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
		"content": `<style>.bry-7ebgg {
  fill: currentColor;
  d: path("M2 20V4h20v16zm4-4h12l-3.75-5l-3 4L9 12z");
}
</style><path class="bry-7ebgg"/>`,
		"fallback": "material-symbols:panorama-sharp",
	});
}

export default Component;
