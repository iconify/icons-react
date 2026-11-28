import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf1hbcc3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary wf1hbcc3j"/>`,
		"fallback": "iconaut:redo-dot-duotone",
	});
}

export default Component;
