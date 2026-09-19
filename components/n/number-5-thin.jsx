import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac91_xbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac91_xbdh"/>`,
		"fallback": "iconamoon:number-5-thin",
	});
}

export default Component;
