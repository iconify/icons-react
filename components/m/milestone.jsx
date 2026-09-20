import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya410lbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya410lbcn"/>`,
		"fallback": "lucide:milestone",
	});
}

export default Component;
