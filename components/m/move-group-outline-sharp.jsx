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
		"content": `<style>.zdpwyc_uf {
  fill: currentColor;
  d: path("M6.5 17v-3.115h1V16h12V6h-12v2.116h-1V3h14v14zm-3 3V6.616h1V19h12.385v1zm8.923-5.327l-.688-.689l2.44-2.484H6.5v-1h7.675l-2.44-2.484l.688-.689L16.096 11z");
}
</style><path class="zdpwyc_uf"/>`,
		"fallback": "material-symbols-light:move-group-outline-sharp",
	});
}

export default Component;
