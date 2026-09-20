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
		"content": `<style>.sk7usbc5j {
  fill: currentColor;
  d: path("m8 18l4-3.05L16 18l-1.5-4.95l4-2.85h-4.9L12 5l-1.6 5.2H5.5l4 2.85zm4 4q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8");
}
</style><path class="sk7usbc5j"/>`,
		"fallback": "material-symbols:stars-outline-sharp",
	});
}

export default Component;
