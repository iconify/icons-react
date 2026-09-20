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
		"content": `<style>.ks3qzdbnx {
  fill: currentColor;
  d: path("m6 16l5-13h2l5 13zm-2 5l1-3h14l1 3z");
}
</style><path class="ks3qzdbnx"/>`,
		"fallback": "material-symbols:stylus-pencil-sharp",
	});
}

export default Component;
