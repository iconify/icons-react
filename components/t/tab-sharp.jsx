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
		"content": `<style>.y4ggz9b8w {
  fill: currentColor;
  d: path("M2 20V4h20v16zm11-10h7V6h-7z");
}
</style><path class="y4ggz9b8w"/>`,
		"fallback": "material-symbols:tab-sharp",
	});
}

export default Component;
