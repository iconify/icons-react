import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.irkn49b_k {
  d: path("M8.334 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0z");
  fill: currentColor;
}

.ldgze-b-i {
  d: path("M18.334 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z");
  fill: currentColor;
}

.yjqdkbxnv {
  d: path("M14.334 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="irkn49b_k"/><path class="yjqdkbxnv"/><path class="ldgze-b-i"/></g>`,
		"fallback": "fluent:more-24-filled",
	});
}

export default Component;
