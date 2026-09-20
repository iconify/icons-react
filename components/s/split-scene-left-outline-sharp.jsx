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
		"content": `<style>.gq-eiyboc {
  fill: currentColor;
  d: path("M15 20v-2h4V6h-4V4h6v16zm-4 2v-2H3V4h8V2h2v20zm8-16v12z");
}
</style><path class="gq-eiyboc"/>`,
		"fallback": "material-symbols:split-scene-left-outline-sharp",
	});
}

export default Component;
