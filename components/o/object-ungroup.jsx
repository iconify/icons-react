import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf0y5u_qd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf0y5u_qd"/>`,
		"fallback": "uit:object-ungroup",
	});
}

export default Component;
