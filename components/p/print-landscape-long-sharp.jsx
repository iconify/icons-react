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
		"content": `<style>.vdj_q-d_a {
  fill: currentColor;
  d: path("M14 4h3v1h3.05L21 6.35L18.225 14H2.6l-.95-1.35L4.425 5H7V4h3v1h4zM4 16h15.725L21 12.475V19H4z");
}
</style><path class="vdj_q-d_a"/>`,
		"fallback": "material-symbols:print-landscape-long-sharp",
	});
}

export default Component;
