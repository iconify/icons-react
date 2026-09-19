import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb2uxglrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb2uxglrv"/>`,
		"fallback": "ci:list-minus",
	});
}

export default Component;
