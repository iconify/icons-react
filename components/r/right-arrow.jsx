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

.xi2fzfb3w {
  fill: var(--svg-color--fff, #fff);
  d: path("M33.7 16L49 32L33.7 48V37.4H15V27.1h18.7z");
}
</style><circle class="bgatx5byk"/><path class="xi2fzfb3w"/>`,
		"fallback": "emojione:right-arrow",
	});
}

export default Component;
