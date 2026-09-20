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
		"content": `<style>.kdeeyub5f {
  fill: currentColor;
  d: path("M9 19h6l-1.975-2.575l-1.45 1.725l-.975-1.3zm-3 3V10h12v12zM3.5 8q.95-2.725 3.288-4.362T12 2q2.05 0 3.888.875T19 5.35V2h2v6h-6V6h1.9q-.975-.975-2.25-1.487T12 4Q9.975 4 8.262 5.075T5.676 8z");
}
</style><path class="kdeeyub5f"/>`,
		"fallback": "material-symbols:replace-image-sharp",
	});
}

export default Component;
