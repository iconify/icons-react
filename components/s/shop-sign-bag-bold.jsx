import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzs4ogjnt.css';
import '../../css/n/n_w_i9mtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzs4ogjnt"/><path class="n_w_i9mtx"/>`,
		"fallback": "streamline-ultimate:shop-sign-bag-bold",
	});
}

export default Component;
