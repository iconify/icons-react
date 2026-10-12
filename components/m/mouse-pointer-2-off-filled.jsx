import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrizkoc3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrizkoc3p"/>`,
		"fallback": "lucide-extended:mouse-pointer-2-off-filled",
	});
}

export default Component;
