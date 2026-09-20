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
		"content": `<style>.d6-ct6bdy {
  fill: currentColor;
  d: path("M3 22V4H2V2h20v2h-1v18q-2.35 0-4.212-1.375T14.275 17H9.7q-.675 2.25-2.525 3.625T3 22m7-7h4V4h-4z");
}
</style><path class="d6-ct6bdy"/>`,
		"fallback": "material-symbols:shades-sharp",
	});
}

export default Component;
