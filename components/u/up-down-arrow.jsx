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
		"content": `<style>.aep4z1bdd {
  fill: var(--svg-color--fff, #fff);
  d: path("m32 52l16-15.5H36.6v-9H48L32 12L16 27.5h11.4v9H16z");
}

.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}
</style><circle class="bgatx5byk"/><path class="aep4z1bdd"/>`,
		"fallback": "emojione:up-down-arrow",
	});
}

export default Component;
