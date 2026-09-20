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
		"content": `<style>.flhvvpb4i {
  fill: currentColor;
  d: path("M9 20v-7.23H5.115L12 3.576l6.885 9.192H15V20zm1-1h4v-7.23h2.775L12 5.245L7.225 11.77H10zm2-7.23");
}
</style><path class="flhvvpb4i"/>`,
		"fallback": "material-symbols-light:shift-outline",
	});
}

export default Component;
