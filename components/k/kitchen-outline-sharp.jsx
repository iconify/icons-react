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
		"content": `<style>.o9wmnkk8c {
  fill: currentColor;
  d: path("M8.192 8V5.385h1V8zm0 8.116v-4.347h1v4.347zM5 21V3h14v18zm1-1h12v-9.615H6zM6 9.385h12V4H6z");
}
</style><path class="o9wmnkk8c"/>`,
		"fallback": "material-symbols-light:kitchen-outline-sharp",
	});
}

export default Component;
