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
		"content": `<style>.ivpp-d16v {
  fill: currentColor;
  d: path("m7.775 19l5-7l-5-7h2.45l5 7l-5 7z");
}
</style><path class="ivpp-d16v"/>`,
		"fallback": "material-symbols:single-arrow-outline-sharp",
	});
}

export default Component;
