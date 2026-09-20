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
		"content": `<style>.o3qy9xntt {
  fill: currentColor;
  d: path("M4 21v-6h16v6zm-2-8v-2h2V3h16v8h2v2z");
}
</style><path class="o3qy9xntt"/>`,
		"fallback": "material-symbols:split-scene-up-sharp",
	});
}

export default Component;
