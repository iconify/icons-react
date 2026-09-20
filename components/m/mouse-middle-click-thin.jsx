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
		"content": `<style>.y80t-x98w {
  fill: currentColor;
  d: path("M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m52 60v28h-48V88a12 12 0 0 0-12-12h-4V28h12a52.06 52.06 0 0 1 52 52m-80 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4Zm-4-60h12v48h-4a12 12 0 0 0-12 12v20H60V80a52.06 52.06 0 0 1 52-52m32 200h-32a52.06 52.06 0 0 1-52-52v-60h48v20a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12v-20h48v60a52.06 52.06 0 0 1-52 52");
}
</style><path class="y80t-x98w"/>`,
		"fallback": "ph:mouse-middle-click-thin",
	});
}

export default Component;
