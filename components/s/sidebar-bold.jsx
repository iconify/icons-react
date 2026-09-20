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
		"content": `<style>.h3j4o5q5g {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 104h28v20H44Zm28-44v20H44V60Zm-28 88h28v48H44Zm168 48H96V60h116Z");
}
</style><path class="h3j4o5q5g"/>`,
		"fallback": "ph:sidebar-bold",
	});
}

export default Component;
