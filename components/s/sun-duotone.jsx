import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uq6nnkheg.css';
import '../../css/v/vyj6x83we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uq6nnkheg"/><path class="vyj6x83we"/></g>`,
		"fallback": "stash:sun-duotone",
	});
}

export default Component;
