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
		"content": `<style>.ohmkwdbaz {
  fill: currentColor;
  d: path("M10 17.27v-1h10v1zm0-4.77v-1h10v1zM4 7.73v-1h16v1z");
}
</style><path class="ohmkwdbaz"/>`,
		"fallback": "material-symbols-light:segment-sharp",
	});
}

export default Component;
