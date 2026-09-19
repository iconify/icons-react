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
		"content": `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.z5pnvwbbk {
  fill: var(--svg-color--fff, #fff);
  d: path("M20 14h8v36h-8zm16 0h8v36h-8z");
}
</style><circle class="bgatx5byk"/><path class="z5pnvwbbk"/>`,
		"fallback": "emojione:pause-button",
	});
}

export default Component;
