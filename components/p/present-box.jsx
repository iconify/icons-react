import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmqg9ef9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmqg9ef9m"/>`,
		"fallback": "streamline-cyber:present-box",
	});
}

export default Component;
