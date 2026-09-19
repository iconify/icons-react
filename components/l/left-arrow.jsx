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

.fsm18xluf {
  fill: var(--svg-color--fff, #fff);
  d: path("M30.3 16L15 32l15.3 16V37.4H49V27.1H30.3z");
}
</style><circle class="bgatx5byk"/><path class="fsm18xluf"/>`,
		"fallback": "emojione:left-arrow",
	});
}

export default Component;
