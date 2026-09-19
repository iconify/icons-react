import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lc7mkuvlr {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m4 30c0 1.477-.81 2.752-2 3.445V38h-4v-.314l-3-1.613l1.427-2.308A4 4 0 0 1 28 32c0-1.477.81-2.752 2-3.445V6h4v18.756L39.416 16L43 17.934l-7.513 12.143c.317.573.513 1.222.513 1.923");
}

.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}
</style><path class="lc7mkuvlr"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:one-oclock",
	});
}

export default Component;
