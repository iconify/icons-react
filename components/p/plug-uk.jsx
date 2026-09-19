import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8c_s2h5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8c_s2h5q"/>`,
		"fallback": "cbi:plug-uk",
	});
}

export default Component;
