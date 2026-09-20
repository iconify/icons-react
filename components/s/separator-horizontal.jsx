import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jshuocb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jshuocb1g"/>`,
		"fallback": "lucide:separator-horizontal",
	});
}

export default Component;
