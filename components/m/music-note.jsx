import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk72dvbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk72dvbsv"/>`,
		"fallback": "heroicons-outline:music-note",
	});
}

export default Component;
