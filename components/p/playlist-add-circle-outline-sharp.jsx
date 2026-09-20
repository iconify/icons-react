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
		"content": `<style>.uwxqoympu {
  fill: currentColor;
  d: path("M15 17h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm-8-2h3v-2H7zm0-3h7v-2H7zm0-3h7V7H7zm5 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8");
}
</style><path class="uwxqoympu"/>`,
		"fallback": "material-symbols:playlist-add-circle-outline-sharp",
	});
}

export default Component;
