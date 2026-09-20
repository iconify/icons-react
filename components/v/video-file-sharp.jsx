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
		"content": `<style>.jqmfklxnd {
  fill: currentColor;
  d: path("M4 22V2h10l6 6v14zm9-13h5l-5-5zm-5 9h6v-2l2 1.05v-4.1L14 14v-2H8z");
}
</style><path class="jqmfklxnd"/>`,
		"fallback": "material-symbols:video-file-sharp",
	});
}

export default Component;
