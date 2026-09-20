import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehnub9r-s.css';
import '../../css/s/sfd5q_aet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehnub9r-s"/><path class="sfd5q_aet"/>`,
		"fallback": "streamline-ultimate:ticket-1-bold",
	});
}

export default Component;
