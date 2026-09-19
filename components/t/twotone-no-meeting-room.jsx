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
		"content": `<style>.ahu_lhsun {
  fill: currentColor;
  d: path("M12 5v3.88l2 2V6h3v7.88l2 2V4h-5V3H6.12l2 2zM2.41 2.13L1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41zM12 19H7V9.54l5 5z");
}

.uk6pgp5ea {
  fill: currentColor;
  d: path("M12 5H8.12L12 8.88V6zM7 19h5v-4.46l-5-5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="uk6pgp5ea"/><path class="ahu_lhsun"/>`,
		"fallback": "ic:twotone-no-meeting-room",
	});
}

export default Component;
