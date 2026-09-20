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
		"content": `<style>.ow5yfjbgq {
  fill: currentColor;
  d: path("M4 13.885V8.769h7.5v5.116zm0-6.116V4h16v3.77zM4 20v-5.115h7.5V20zm8.5-6.116V8.77h7.304v1.039l-4.102 4.077zM13.23 21v-2.21l5.96-5.934l2.19 2.204L15.44 21zm5.96-4.985l.925-.956l-.924-.943l-.95.95z");
}
</style><path class="ow5yfjbgq"/>`,
		"fallback": "material-symbols-light:table-edit-sharp",
	});
}

export default Component;
