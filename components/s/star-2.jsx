import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngt5p8b-d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngt5p8b-d"/>`,
		"fallback": "streamline:star-2",
	});
}

export default Component;
