import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l87bt4btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l87bt4btb"/>`,
		"fallback": "ri:oil-fill",
	});
}

export default Component;
