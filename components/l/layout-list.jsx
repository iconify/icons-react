import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6g75oclj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6g75oclj"/>`,
		"fallback": "noviair:layout-list",
	});
}

export default Component;
