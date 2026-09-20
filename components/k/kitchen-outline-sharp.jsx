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
		"content": `<style>.y6jab7f2n {
  fill: currentColor;
  d: path("M8 8V5h2v3zm0 9v-5h2v5zm-4 5V2h16v20zm2-2h12v-9H6zM6 9h12V4H6z");
}
</style><path class="y6jab7f2n"/>`,
		"fallback": "material-symbols:kitchen-outline-sharp",
	});
}

export default Component;
