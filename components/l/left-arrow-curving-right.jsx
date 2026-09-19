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

.h_82iyxwl {
  fill: var(--svg-color--fff, #fff);
  d: path("m47 46.3l-9.1-9.7v6.1h-7.3c-5.3 0-9.7-5.1-9.7-11.2c0-6.2 4.8-11.3 10.8-11.3h9.2V12h-9.2C21.3 12 13 20.7 13 31.4c0 10.5 8 19.4 17.5 19.4h7.3V56z");
}
</style><circle class="bgatx5byk"/><path class="h_82iyxwl"/>`,
		"fallback": "emojione:left-arrow-curving-right",
	});
}

export default Component;
