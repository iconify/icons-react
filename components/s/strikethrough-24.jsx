import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtvgt3blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtvgt3blt"/>`,
		"fallback": "octicon:strikethrough-24",
	});
}

export default Component;
