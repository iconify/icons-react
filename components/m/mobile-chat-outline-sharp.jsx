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
		"content": `<style>.mpf3huadh {
  fill: currentColor;
  d: path("M7 21V3zm10 0v-2zm-2-6h5v-3h-5zm-2 4v-9h9v7h-7zm-8 4V1h14v7h-2V3H7v18h10v-2h2v4zm7.713-17.287Q13 5.424 13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6t.713-.288M15 15v-3z");
}
</style><path class="mpf3huadh"/>`,
		"fallback": "material-symbols:mobile-chat-outline-sharp",
	});
}

export default Component;
