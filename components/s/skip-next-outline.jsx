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
		"content": `<style>.pbqwdbbjh {
  fill: currentColor;
  d: path("M16.5 18V6h2v12zm-11 0V6l9 6zm2-3.75L10.9 12L7.5 9.75z");
}
</style><path class="pbqwdbbjh"/>`,
		"fallback": "material-symbols:skip-next-outline",
	});
}

export default Component;
