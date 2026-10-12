import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzpnafokc.css';
import '../../css/s/sb1oe8_aw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzpnafokc"/><path class="sb1oe8_aw"/>`,
		"fallback": "garden:logo-whatsapp-20",
	});
}

export default Component;
