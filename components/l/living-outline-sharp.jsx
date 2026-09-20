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
		"content": `<style>.m71t1hbat {
  fill: currentColor;
  d: path("M2 22V2h20v20zm2-2h16V4H4zm1-2h14v-7.65h-1.25V6H6.25v4.35H5zm1.5-1.5v-5h2v3h7v-3h2v5zM10 13v-2.95H7.75V7.5h8.5v2.55H14V13zm-6 7V4z");
}
</style><path class="m71t1hbat"/>`,
		"fallback": "material-symbols:living-outline-sharp",
	});
}

export default Component;
