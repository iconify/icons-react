import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq0wx8bxg.css';
import '../../css/l/l6oz6zbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq0wx8bxg"/><path class="l6oz6zbkb"/>`,
		"fallback": "boxicons:wallet-alt",
	});
}

export default Component;
