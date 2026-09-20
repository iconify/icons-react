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
		"content": `<style>.p3z5tcbvp {
  fill: currentColor;
  d: path("M11.5 16.23h1v-1.384h-1zm0-2.807h1V8.769h-1zM19 21H5V8.423L10.423 3H19z");
}
</style><path class="p3z5tcbvp"/>`,
		"fallback": "material-symbols-light:sd-card-alert-sharp",
	});
}

export default Component;
