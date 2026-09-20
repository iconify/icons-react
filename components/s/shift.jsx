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
		"content": `<style>.l8t_s1bxo {
  fill: currentColor;
  d: path("M9 20v-7.23H5.115L12 3.576l6.885 9.192H15V20z");
}
</style><path class="l8t_s1bxo"/>`,
		"fallback": "material-symbols-light:shift",
	});
}

export default Component;
