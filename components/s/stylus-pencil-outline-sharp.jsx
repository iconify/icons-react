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
		"content": `<style>.ckm01-b7q {
  fill: currentColor;
  d: path("m6 16l5-13h2l5 13zm2.9-2h6.2L12 5.975zm0 0h6.2zM4 21l1-3h14l1 3z");
}
</style><path class="ckm01-b7q"/>`,
		"fallback": "material-symbols:stylus-pencil-outline-sharp",
	});
}

export default Component;
