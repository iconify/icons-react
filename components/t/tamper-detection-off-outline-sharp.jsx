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
		"content": `<style>.bbdwkp41z {
  fill: currentColor;
  d: path("m20.577 15.77l-3.039-3.04v2.124l-1-1V6H8.686l-1-1h9.854v6.27l3.038-3.04zM3.538 10.191V5.04h1.347l.961.96H4.54v4.192zM12.27 19v-1h4.27v-1.308l.961.962V19zm7.127 1.966L2.42 3.988l.708-.708l16.977 16.977zm-14.79-.043L2 18.323l.67-.784l1.31 1.311v-5.677h.886v3.058h.769v-4.27h.884v4.27h.77v-3.654h.884v3.654h.77v-2.847h.884v7.539z");
}
</style><path class="bbdwkp41z"/>`,
		"fallback": "material-symbols-light:tamper-detection-off-outline-sharp",
	});
}

export default Component;
