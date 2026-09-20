import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_ffcxrtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_ffcxrtp"/>`,
		"fallback": "streamline-cyber:laptop-2",
	});
}

export default Component;
