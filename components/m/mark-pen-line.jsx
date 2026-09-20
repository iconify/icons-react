import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui6rey9mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui6rey9mb"/>`,
		"fallback": "ri:mark-pen-line",
	});
}

export default Component;
