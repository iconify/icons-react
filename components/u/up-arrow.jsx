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

.gq51_p64a {
  fill: var(--svg-color--fff, #fff);
  d: path("M48 30.3L32 15L16 30.3h10.6V49h10.3V30.3z");
}
</style><circle class="bgatx5byk"/><path class="gq51_p64a"/>`,
		"fallback": "emojione:up-arrow",
	});
}

export default Component;
