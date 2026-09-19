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

.ee3sz8y1c {
  fill: var(--svg-color--fff, #fff);
  d: path("M38 12L18 32l20 20z");
}
</style><circle class="bgatx5byk"/><path class="ee3sz8y1c"/>`,
		"fallback": "emojione:reverse-button",
	});
}

export default Component;
