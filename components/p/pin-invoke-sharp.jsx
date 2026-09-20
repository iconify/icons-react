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
		"content": `<style>.mtpzacc4d {
  fill: currentColor;
  d: path("M2 20V4h12v2H4v12h16v-6h2v8zm8.05-3.625l-1.4-1.425L11.6 12H9.35v-2H15v5.65h-2v-2.225zM19 10q-1.25 0-2.125-.875T16 7t.875-2.125T19 4t2.125.875T22 7t-.875 2.125T19 10");
}
</style><path class="mtpzacc4d"/>`,
		"fallback": "material-symbols:pin-invoke-sharp",
	});
}

export default Component;
