import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrv606btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrv606btm"/>`,
		"fallback": "lucide-extended:plane-takeoff-filled",
	});
}

export default Component;
