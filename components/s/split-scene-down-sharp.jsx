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
		"content": `<style>.p1g2yxbvr {
  fill: currentColor;
  d: path("M4 9V3h16v6zm0 12v-8H2v-2h20v2h-2v8z");
}
</style><path class="p1g2yxbvr"/>`,
		"fallback": "material-symbols:split-scene-down-sharp",
	});
}

export default Component;
