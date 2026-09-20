import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjy_hdcyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjy_hdcyb"/>`,
		"fallback": "streamline-cyber-color:map-target-2",
	});
}

export default Component;
