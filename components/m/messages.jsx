import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/argxp8b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="argxp8b7b"/>`,
		"fallback": "noviair:messages",
	});
}

export default Component;
