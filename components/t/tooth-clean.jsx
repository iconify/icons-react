import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/objheo4-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="objheo4-m"/>`,
		"fallback": "griddy-icons:tooth-clean",
	});
}

export default Component;
