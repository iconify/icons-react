import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xskbo8bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xskbo8bam"/>`,
		"fallback": "circum:signpost-duo-1",
	});
}

export default Component;
