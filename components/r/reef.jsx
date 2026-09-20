import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsdw_21te.css';
import '../../css/i/ihcr3ob1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsdw_21te"/><path class="ihcr3ob1j"/>`,
		"fallback": "token:reef",
	});
}

export default Component;
