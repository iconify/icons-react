import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uye2wsfpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uye2wsfpn"/>`,
		"fallback": "lucide-extended:square-off-filled",
	});
}

export default Component;
