import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waz848bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="waz848bbn"/>`,
		"fallback": "griddy-icons:student",
	});
}

export default Component;
