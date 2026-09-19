import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf1fo6loa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf1fo6loa"/>`,
		"fallback": "ci:plus-square",
	});
}

export default Component;
