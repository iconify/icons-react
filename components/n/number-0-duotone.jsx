import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcu6sacby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcu6sacby primary"/>`,
		"fallback": "iconaut:number-0-duotone",
	});
}

export default Component;
