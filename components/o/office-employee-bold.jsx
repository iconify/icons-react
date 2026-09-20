import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcjpb1kkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcjpb1kkt"/>`,
		"fallback": "streamline-ultimate:office-employee-bold",
	});
}

export default Component;
