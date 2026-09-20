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
		"content": `<style>.elx_9_pak {
  fill: currentColor;
  d: path("M4 9V3h16v6h-2V5H6v4zm0 12v-8H2v-2h20v2h-2v8zM6 5h12z");
}
</style><path class="elx_9_pak"/>`,
		"fallback": "material-symbols:split-scene-down-outline-sharp",
	});
}

export default Component;
