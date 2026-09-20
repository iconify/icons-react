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
		"content": `<style>.evgoapbrs {
  fill: currentColor;
  d: path("M9 16.616v-3.847H5.115L12 3.577l6.885 9.192H15v3.846zm1-1h4v-3.847h2.775L12 5.246L7.225 11.77H10zM5 20v-1h14v1z");
}
</style><path class="evgoapbrs"/>`,
		"fallback": "material-symbols-light:shift-lock-outline-sharp",
	});
}

export default Component;
