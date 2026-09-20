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
		"content": `<style>.db7ekjori {
  fill: currentColor;
  d: path("M11.5 17.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM5 21V3h9.5L19 7.5V21zm9-13h4l-4-4z");
}
</style><path class="db7ekjori"/>`,
		"fallback": "material-symbols-light:note-add-sharp",
	});
}

export default Component;
