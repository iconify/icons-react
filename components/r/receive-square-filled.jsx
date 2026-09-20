import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx7x4ac0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nx7x4ac0v"/>`,
		"fallback": "reicon:receive-square-filled",
	});
}

export default Component;
