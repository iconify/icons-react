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
		"content": `<style>.cgzvr_bha {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-2.3-2.3zm2-4V9.825l-2-2V19h11.175l-2-2zm14 1.15l-2-2V5H7.85l-2-2H19q.825 0 1.413.588T21 5zM9 15h3.175L9 11.825zm8-.85l-2-2V9h-2v1.15l-1.875-1.875q.225-.575.725-.925T13 7h4zm-3.575-3.575");
}
</style><path class="cgzvr_bha"/>`,
		"fallback": "material-symbols:nfc-off-outline",
	});
}

export default Component;
