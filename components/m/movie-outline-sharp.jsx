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
		"content": `<style>.sbnn7zbtr {
  fill: currentColor;
  d: path("M2 20V4h2l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h5v16zm2-10v8h16v-8zm0 0v8z");
}
</style><path class="sbnn7zbtr"/>`,
		"fallback": "material-symbols:movie-outline-sharp",
	});
}

export default Component;
