import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ils92p-0f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ils92p-0f"/>`,
		"fallback": "f7:smallcircle-circle",
	});
}

export default Component;
