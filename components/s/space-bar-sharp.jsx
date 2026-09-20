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
		"content": `<style>.ozy0kubmi {
  fill: currentColor;
  d: path("M4 15V9h2v4h12V9h2v6z");
}
</style><path class="ozy0kubmi"/>`,
		"fallback": "material-symbols:space-bar-sharp",
	});
}

export default Component;
