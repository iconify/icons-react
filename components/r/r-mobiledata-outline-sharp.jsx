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
		"content": `<style>.j96fpbbdt {
  fill: currentColor;
  d: path("M2 10V2h7v5.2H7.8L9 10H7L5.85 7.35H4V10zm2-4.65h3V4H4z");
}
</style><path class="j96fpbbdt"/>`,
		"fallback": "material-symbols:r-mobiledata-outline-sharp",
	});
}

export default Component;
