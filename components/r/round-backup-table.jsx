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
		"content": `<style>.l_90zjxap {
  fill: currentColor;
  d: path("M4 7v13h13c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2-.9-2-2V7c0-.55.45-1 1-1s1 .45 1 1");
}

.p-ad2ti2j {
  fill: currentColor;
  d: path("M6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2m9 7h5v5h-5zm-7 0h5v5H8zm0-7h12v5H8z");
}
</style><path class="l_90zjxap"/><path class="p-ad2ti2j"/>`,
		"fallback": "ic:round-backup-table",
	});
}

export default Component;
