import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uferroy5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uferroy5j"/>`,
		"fallback": "streamline-ultimate:performance-increase-bold",
	});
}

export default Component;
