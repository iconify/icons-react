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
		"content": `<style>.azhp-xb4t {
  cx: 32px;
  cy: 32px;
  r: 15px;
  fill: var(--svg-color--fff, #fff);
}

.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}
</style><circle class="bgatx5byk"/><circle class="azhp-xb4t"/>`,
		"fallback": "emojione:record-button",
	});
}

export default Component;
