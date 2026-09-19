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
		"content": `<style>.atg1l9e9y {
  fill: currentColor;
  d: path("M5 19h14V5H5zM15 7h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2zM7 7h2v2H7zm0 4h2v2H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.b3h8yx8_x {
  fill: currentColor;
  d: path("M7 7h2v2H7zm0 4h2v2H7z");
}

.vja0g088d {
  fill: currentColor;
  d: path("M11 7h2v2h-2zm4 4h2v2h-2zm-4 0h2v2h-2zm4-4h2v2h-2z");
}

.xugrx5b8f {
  fill: currentColor;
  d: path("M3 3v18h18V3zm16 16H5V5h14z");
}
</style><path class="atg1l9e9y"/><path class="b3h8yx8_x"/><path class="xugrx5b8f"/><path class="vja0g088d"/>`,
		"fallback": "ic:twotone-margin",
	});
}

export default Component;
