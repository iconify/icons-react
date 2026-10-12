import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4t4bmbus.css';
import '../../css/z/zc_h-6bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4t4bmbus"/><path class="zc_h-6bbl"/>`,
		"fallback": "lucide-extended:mail-filled",
	});
}

export default Component;
