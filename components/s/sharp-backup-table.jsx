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
		"content": `<style>.i_n0t7ehr {
  fill: currentColor;
  d: path("M20 6v14H6v2h16V6z");
}

.qmuo7ebvh {
  fill: currentColor;
  d: path("M18 2H2v16h16zM9 16H4v-5h5zm7 0h-5v-5h5zm0-7H4V4h12z");
}
</style><path class="i_n0t7ehr"/><path class="qmuo7ebvh"/>`,
		"fallback": "ic:sharp-backup-table",
	});
}

export default Component;
