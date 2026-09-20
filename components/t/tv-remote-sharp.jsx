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
		"content": `<style>.oy9a-8eub {
  fill: currentColor;
  d: path("M14.125 14.125Q15 13.25 15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15t2.125-.875M8 22V2h8v20zm3.11-9.11q-.36-.361-.36-.89t.36-.89q.361-.36.89-.36t.89.36q.36.361.36.89t-.36.89q-.361.36-.89.36t-.89-.36m1.41-7.37q.21-.209.21-.52t-.21-.52q-.209-.21-.52-.21t-.52.21q-.21.209-.21.52t.21.52q.209.21.52.21t.52-.21");
}
</style><path class="oy9a-8eub"/>`,
		"fallback": "material-symbols-light:tv-remote-sharp",
	});
}

export default Component;
