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
		"content": `<style>.a2ai3ob7u {
  fill: var(--svg-color--fff, #fff);
  d: path("M26.2 46.5h-7l9.3-14.8l-8.9-14.2h7.2l5.2 9.4l5.3-9.4h7l-8.9 14l9.4 15h-7.4L32 36.6z");
}

.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}
</style><circle class="bgatx5byk"/><path class="a2ai3ob7u"/>`,
		"fallback": "emojione:letter-x",
	});
}

export default Component;
