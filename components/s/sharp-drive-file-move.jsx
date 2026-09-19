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
		"content": `<style>.s-fht_o0j {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zM12 17v-3H8v-2h4V9l4 4z");
}
</style><path class="s-fht_o0j"/>`,
		"fallback": "ic:sharp-drive-file-move",
	});
}

export default Component;
