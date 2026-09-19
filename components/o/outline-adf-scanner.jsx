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
		"content": `<style>.c9gbovbnk {
  cx: 18px;
  cy: 16px;
  r: 1px;
  fill: currentColor;
}

.zrsrjmbut {
  fill: currentColor;
  d: path("M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3M8 6h8v6H8zm12 12H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z");
}
</style><path class="zrsrjmbut"/><circle class="c9gbovbnk"/>`,
		"fallback": "ic:outline-adf-scanner",
	});
}

export default Component;
