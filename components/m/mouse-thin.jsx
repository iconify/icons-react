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
		"content": `<style>.aky3lrn8g {
  fill: currentColor;
  d: path("M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m52 60v28h-64V28h12a52.06 52.06 0 0 1 52 52m-84-52h12v80H60V80a52.06 52.06 0 0 1 52-52m32 200h-32a52.06 52.06 0 0 1-52-52v-60h136v60a52.06 52.06 0 0 1-52 52");
}
</style><path class="aky3lrn8g"/>`,
		"fallback": "ph:mouse-thin",
	});
}

export default Component;
