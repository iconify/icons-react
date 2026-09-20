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
		"content": `<style>.qwzsm8brx {
  fill: currentColor;
  d: path("M7.77 19v-1.115H4V12.5H2v-1h2V6.116h3.77V5h1v14zM5 16.884h2.77V7.116H5zM15.23 19v-3.712h-3.75v-1h3.75V9.712h-3.75v-1h3.75V5h1v1.116H20V11.5h2v1h-2v5.385h-3.77V19zm1-2.116H19V7.116h-2.77zm0-4.884");
}
</style><path class="qwzsm8brx"/>`,
		"fallback": "material-symbols-light:plug-connect-outline-sharp",
	});
}

export default Component;
