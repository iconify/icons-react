import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k1o0pv54v {
  fill: currentColor;
  d: path("M3.5 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M6 1a3.5 3.5 0 0 0-2 6.373V10.5a.5.5 0 0 0 .777.416L6 10.101l1.223.815A.5.5 0 0 0 8 10.5V7.373A3.5 3.5 0 0 0 6 1m1 6.855v1.71l-.723-.481a.5.5 0 0 0-.554 0L5 9.566v-1.71a3.5 3.5 0 0 0 2 0");
}
</style><path class="k1o0pv54v"/>`,
		"fallback": "fluent:ribbon-12-regular",
	});
}

export default Component;
