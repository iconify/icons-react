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
		"content": `<style>.fcj7r0boy {
  fill: currentColor;
  d: path("M2 22V6h2v14h14v2zm4-4V2h16v16zm7-10h7V4h-7z");
}
</style><path class="fcj7r0boy"/>`,
		"fallback": "material-symbols:tab-group-sharp",
	});
}

export default Component;
