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
		"content": `<style>.x9aeu3qvj {
  fill: currentColor;
  d: path("M4 19q-.402 0-.701-.299T3 18v-4.308h4.5v1h1v-1h7v1h1v-1H21V18q0 .402-.299.701T20 19zm-.825-6.308l2.248-5.108q.11-.28.35-.432T6.3 7h1.892V5.846q0-.402.3-.7q.299-.3.7-.3h5.616q.402 0 .7.3q.3.298.3.7V7H17.7q.287 0 .527.152t.35.433l2.248 5.107H16.5v-1h-1v1h-7v-1h-1v1zM9.192 7h5.616V5.846H9.192z");
}
</style><path class="x9aeu3qvj"/>`,
		"fallback": "material-symbols-light:service-toolbox",
	});
}

export default Component;
