import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-78w7_bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w-78w7_bl"/>`,
		"fallback": "reicon:rolling-pin",
	});
}

export default Component;
