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
		"content": `<style>.g4kz7hbgn {
  fill: currentColor;
  d: path("M1 18.308v-1h2V4.538h18v12.77h2v1zm9-1h4v-.77h-4z");
}
</style><path class="g4kz7hbgn"/>`,
		"fallback": "material-symbols-light:laptop-chromebook-sharp",
	});
}

export default Component;
