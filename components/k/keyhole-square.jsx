import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqbu23bhp.css';
import '../../css/n/ndzxj5bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqbu23bhp"/><path class="ndzxj5bdh"/>`,
		"fallback": "uim:keyhole-square",
	});
}

export default Component;
