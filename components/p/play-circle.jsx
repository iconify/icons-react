import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr70xqm1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nr70xqm1n"/>`,
		"fallback": "griddy-icons:play-circle",
	});
}

export default Component;
