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
		"content": `<style>.hs9mpwbvz {
  fill: currentColor;
  d: path("M16.5 20h1v-4h-1zm.5-5q.2 0 .35-.15t.15-.35t-.15-.35T17 14t-.35.15t-.15.35t.15.35t.35.15M5 4v16zv5zm2 10h3.675q.275-.575.638-1.075t.812-.925H7zm0 4h3.075Q10 17.5 10 17t.075-1H7zm-2 4q-.825 0-1.412-.587T3 20V4q0-.825.588-1.412T5 2h8l6 6v2.3q-.475-.15-.975-.225T17 10V9h-5V4H5v16h5.675q.275.575.638 1.075t.812.925zm15.538-8.537Q22 14.925 22 17t-1.463 3.538T17 22t-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463");
}
</style><path class="hs9mpwbvz"/>`,
		"fallback": "material-symbols:quick-reference-outline",
	});
}

export default Component;
