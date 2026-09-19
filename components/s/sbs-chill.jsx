import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcnk7q1qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcnk7q1qf"/>`,
		"fallback": "cbi:sbs-chill",
	});
}

export default Component;
