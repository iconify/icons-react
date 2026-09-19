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

.e_ekdbbdd {
  fill: var(--svg-color--fff, #fff);
  d: path("m20.8 41.4l14.8-18.8H21.2v-5.1h22v4.9l-15 19h15.1v5.1H20.8z");
}
</style><circle class="bgatx5byk"/><path class="e_ekdbbdd"/>`,
		"fallback": "emojione:letter-z",
	});
}

export default Component;
