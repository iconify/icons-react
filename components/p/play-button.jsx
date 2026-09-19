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

.wl5p9fbiw {
  fill: var(--svg-color--fff, #fff);
  d: path("m25 12l20 20l-20 20z");
}
</style><circle class="bgatx5byk"/><path class="wl5p9fbiw"/>`,
		"fallback": "emojione:play-button",
	});
}

export default Component;
