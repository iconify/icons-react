import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbe84dbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbe84dbdj"/>`,
		"fallback": "mono-icons:user-add",
	});
}

export default Component;
