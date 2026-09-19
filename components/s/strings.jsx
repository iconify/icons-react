import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzlw4kb0c.css';

const viewBox = {"width":476,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzlw4kb0c"/>`,
		"fallback": "file-icons:strings",
	});
}

export default Component;
