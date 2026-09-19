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

.d-qw14bfx {
  fill: var(--svg-color--fff, #fff);
  d: path("M52 46L34.6 32L52 18zm-17.4 0L17.2 32l17.4-14zM12 18h5.2v28H12z");
}
</style><circle class="bgatx5byk"/><path class="d-qw14bfx"/>`,
		"fallback": "emojione:last-track-button",
	});
}

export default Component;
