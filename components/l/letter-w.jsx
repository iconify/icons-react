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

.ht69pubzq {
  fill: var(--svg-color--fff, #fff);
  d: path("m20 17.5l3.8 16.6l.8 4.6l.8-4.5l3.3-16.7h6.4l3.4 16.6l.9 4.6l.9-4.4l3.9-16.8h6.2l-8.2 29h-5.8l-3.5-17l-1-5.6l-1 5.6l-3.5 17h-5.6l-8.2-29z");
}
</style><circle class="bgatx5byk"/><path class="ht69pubzq"/>`,
		"fallback": "emojione:letter-w",
	});
}

export default Component;
