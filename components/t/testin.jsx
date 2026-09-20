import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm1fwac7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm1fwac7q"/>`,
		"fallback": "thesvg:testin",
	});
}

export default Component;
