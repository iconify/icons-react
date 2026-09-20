import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxfw-3b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxfw-3b4x"/>`,
		"fallback": "lucide:list-x",
	});
}

export default Component;
