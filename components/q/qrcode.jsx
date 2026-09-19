import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_zkeqxre.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_zkeqxre"/>`,
		"fallback": "fa6-solid:qrcode",
	});
}

export default Component;
