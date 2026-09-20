import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyrvuq2nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyrvuq2nc"/>`,
		"fallback": "streamline-ultimate:party-decoration",
	});
}

export default Component;
