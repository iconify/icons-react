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
		"content": `<style>.ak13kd81v {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V6H4zm2-2h12l-3.75-5l-3 4L9 12zm-2 2V6z");
}
</style><path class="ak13kd81v"/>`,
		"fallback": "material-symbols:panorama-outline-sharp",
	});
}

export default Component;
