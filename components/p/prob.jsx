import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d185acboo.css';
import '../../css/o/o4dhdybxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d185acboo"/><path class="o4dhdybxn"/>`,
		"fallback": "token:prob",
	});
}

export default Component;
