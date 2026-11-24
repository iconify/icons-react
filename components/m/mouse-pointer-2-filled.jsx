import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc4hsghsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc4hsghsw"/>`,
		"fallback": "lucide-extended:mouse-pointer-2-filled",
	});
}

export default Component;
