import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe6d94qfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe6d94qfv"/>`,
		"fallback": "uil:medal",
	});
}

export default Component;
