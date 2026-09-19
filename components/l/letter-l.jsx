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

.l7_u9bb3w {
  fill: var(--svg-color--fff, #fff);
  d: path("M22.7 17.5h6.1v23.8h14.5v5.2H22.7z");
}
</style><circle class="bgatx5byk"/><path class="l7_u9bb3w"/>`,
		"fallback": "emojione:letter-l",
	});
}

export default Component;
