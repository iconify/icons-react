import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmevn97iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmevn97iw"/>`,
		"fallback": "mdi:user-circle",
	});
}

export default Component;
