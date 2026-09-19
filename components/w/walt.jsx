import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa-a72udx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa-a72udx"/>`,
		"fallback": "file-icons:walt",
	});
}

export default Component;
