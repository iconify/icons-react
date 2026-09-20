import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3brtkb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w3brtkb7v"/>`,
		"fallback": "reicon:list-arrow-down2",
	});
}

export default Component;
