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
		"content": `<style>.hmj7r7trx {
  fill: currentColor;
  d: path("M11 19h2v-4.175l1.6 1.6L16 15l-4-4l-4 4l1.425 1.4L11 14.825zm-7 3V2h10l6 6v14zm9-13h5l-5-5z");
}
</style><path class="hmj7r7trx"/>`,
		"fallback": "material-symbols:upload-file-sharp",
	});
}

export default Component;
