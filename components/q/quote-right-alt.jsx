import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsb06sb4t.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsb06sb4t"/>`,
		"fallback": "el:quote-right-alt",
	});
}

export default Component;
