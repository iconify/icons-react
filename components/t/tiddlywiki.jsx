import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l57asep-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l57asep-d"/>`,
		"fallback": "simple-icons:tiddlywiki",
	});
}

export default Component;
