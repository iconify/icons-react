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
		"content": `<style>.y79-v1bdj {
  fill: currentColor;
  d: path("M7 17V9H5V7h4v10zm3 0v-2h2v2zm3 0h6v-2h-4v-2h2q.825 0 1.413-.587T19 11V9q0-.825-.587-1.412T17 7h-4v2h4v2h-2q-.825 0-1.412.588T13 13z");
}
</style><path class="y79-v1bdj"/>`,
		"fallback": "material-symbols:speed-1-2",
	});
}

export default Component;
