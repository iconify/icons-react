import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atmzkckly.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtipehbld.css';
import '../../css/w/w-t6mzbal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atmzkckly secondary"/><g class="dt0cm9dhy primary"><path class="gtipehbld"/><path class="w-t6mzbal"/></g>`,
		"fallback": "iconaut:message-pen-duo",
	});
}

export default Component;
