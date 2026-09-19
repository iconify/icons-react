import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se-dpyb_y.css';

const viewBox = {"width":422,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se-dpyb_y"/>`,
		"fallback": "ls:record",
	});
}

export default Component;
