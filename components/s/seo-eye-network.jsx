import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjmq40opm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jjmq40opm"/>`,
		"fallback": "streamline-freehand:seo-eye-network",
	});
}

export default Component;
