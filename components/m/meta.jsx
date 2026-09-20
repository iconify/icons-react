import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqsn7cccf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqsn7cccf"/>`,
		"fallback": "streamline:meta",
	});
}

export default Component;
