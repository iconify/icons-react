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
		"content": `<style>.f2778wbqu {
  fill: currentColor;
  d: path("M11.702 20.618q-.136-.052-.267-.183l-2.389-2.389q-.14-.14-.15-.341t.15-.366q.166-.166.357-.166t.357.166l1.74 1.74v-5.102q-1.725-.215-2.863-1.472T7.5 9.5q0-1.864 1.318-3.182T12 5t3.182 1.318T16.5 9.5q0 1.748-1.137 3.005T12.5 13.977v5.102l1.746-1.746q.14-.14.341-.15q.202-.01.367.156q.16.159.16.353t-.16.354l-2.388 2.389q-.132.13-.268.183t-.298.053t-.298-.053m2.779-8.637Q15.5 10.96 15.5 9.5t-1.02-2.48T12 6T9.52 7.02T8.5 9.5t1.02 2.48T12 13t2.48-1.02M12 9.5");
}
</style><path class="f2778wbqu"/>`,
		"fallback": "material-symbols-light:swipe-down-alt-outline-rounded",
	});
}

export default Component;
