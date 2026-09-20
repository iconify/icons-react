import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2p0yrbfm.css';
import '../../css/c/cgy263brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2p0yrbfm"/><path clip-rule="evenodd" class="cgy263brh"/>`,
		"fallback": "token:keplr",
	});
}

export default Component;
