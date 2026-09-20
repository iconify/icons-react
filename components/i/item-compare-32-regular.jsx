import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ue-fesmbq {
  fill: currentColor;
  d: path("M16 3a1 1 0 0 1 1 1v24a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1m-6.25 7A3.25 3.25 0 0 1 13 13.25v5.5A3.25 3.25 0 0 1 9.75 22h-5.5A3.25 3.25 0 0 1 1 18.75v-5.5A3.25 3.25 0 0 1 4.25 10zm18 0A3.25 3.25 0 0 1 31 13.25v5.5A3.25 3.25 0 0 1 27.75 22h-5.5A3.25 3.25 0 0 1 19 18.75v-5.5A3.25 3.25 0 0 1 22.25 10zm-23.5 2C3.56 12 3 12.56 3 13.25v5.5c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25zm18 0c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25z");
}
</style><path class="ue-fesmbq"/>`,
		"fallback": "fluent:item-compare-32-regular",
	});
}

export default Component;
