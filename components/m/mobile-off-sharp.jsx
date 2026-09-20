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
		"content": `<style>.c90kml0-l {
  fill: currentColor;
  d: path("M20.5 23.3L.7 3.5l1.4-1.4l19.8 19.8zM12.713 5.713Q13 5.425 13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6t.713-.288M5 23V5l14 14v4zm14-6.8L5.125 2.275V1H19v5.1h1v4.8h-1z");
}
</style><path class="c90kml0-l"/>`,
		"fallback": "material-symbols:mobile-off-sharp",
	});
}

export default Component;
