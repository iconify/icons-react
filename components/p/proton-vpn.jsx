import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcxe_dbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcxe_dbez"/>`,
		"fallback": "thesvg:proton-vpn",
	});
}

export default Component;
