import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtchkf_qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtchkf_qj"/>`,
		"fallback": "mdi:psychology",
	});
}

export default Component;
