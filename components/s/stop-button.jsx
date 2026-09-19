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

.i3nylx-aj {
  fill: var(--svg-color--fff, #fff);
  d: path("M17 17h30v30H17z");
}
</style><circle class="bgatx5byk"/><path class="i3nylx-aj"/>`,
		"fallback": "emojione:stop-button",
	});
}

export default Component;
