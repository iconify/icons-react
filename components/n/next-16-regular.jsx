import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k_00_lvkp {
  fill: currentColor;
  d: path("M14 2.5a.5.5 0 1 0-1 0v11a.5.5 0 0 0 1 0zM2 3.002a1 1 0 0 1 1.579-.816l7 4.963a1 1 0 0 1 .006 1.628l-7 5.037A1 1 0 0 1 2 13.003zm8 4.963L3 3.002v10z");
}
</style><path class="k_00_lvkp"/>`,
		"fallback": "fluent:next-16-regular",
	});
}

export default Component;
