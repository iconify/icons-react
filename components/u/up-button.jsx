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

.u6_-_fblr {
  fill: var(--svg-color--fff, #fff);
  d: path("M52 38L32 18L12 38z");
}
</style><circle class="bgatx5byk"/><path class="u6_-_fblr"/>`,
		"fallback": "emojione:up-button",
	});
}

export default Component;
