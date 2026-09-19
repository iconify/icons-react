import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa2yz5sit.css';

const viewBox = {"width":470,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa2yz5sit"/>`,
		"fallback": "file-icons:tilt",
	});
}

export default Component;
