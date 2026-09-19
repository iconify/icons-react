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
		"content": `<style>.c_ov7_mor {
  fill: currentColor;
  d: path("M11 11h5v5h-5zm-7 0h5v5H4zm0-7h12v5H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.oqxs_owrp {
  fill: currentColor;
  d: path("M20 6v14H6v2h14c1.1 0 2-.9 2-2V6z");
}

.y5xj61uqq {
  fill: currentColor;
  d: path("M18 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M4 4h12v5H4zm5 12H4v-5h5zm2-5h5v5h-5z");
}
</style><path class="c_ov7_mor"/><path class="oqxs_owrp"/><path class="y5xj61uqq"/>`,
		"fallback": "ic:twotone-backup-table",
	});
}

export default Component;
