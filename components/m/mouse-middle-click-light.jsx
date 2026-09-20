import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yob49jt3v {
  fill: currentColor;
  d: path("M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 62v26h-44V88a14 14 0 0 0-14-14h-2V30h10a50.06 50.06 0 0 1 50 50m-76 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2Zm-6-58h10v44h-2a14 14 0 0 0-14 14v18H62V80a50.06 50.06 0 0 1 50-50m32 196h-32a50.06 50.06 0 0 1-50-50v-58h44v18a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14v-18h44v58a50.06 50.06 0 0 1-50 50");
}
</style><path class="yob49jt3v"/>`,
		"fallback": "ph:mouse-middle-click-light",
	});
}

export default Component;
