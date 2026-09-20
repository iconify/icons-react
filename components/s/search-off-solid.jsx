import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yat7r_bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yat7r_bam"/>`,
		"fallback": "mynaui:search-off-solid",
	});
}

export default Component;
