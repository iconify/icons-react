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

.nbck4pbpv {
  fill: var(--svg-color--fff, #fff);
  d: path("M42.3 22.6H26.9v6.2H41v5H26.9v7.5H43v5.2H21v-29h21.3z");
}
</style><circle class="bgatx5byk"/><path class="nbck4pbpv"/>`,
		"fallback": "emojione:letter-e",
	});
}

export default Component;
