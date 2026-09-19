import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow1wj2bms.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow1wj2bms"/>`,
		"fallback": "bytesize:upload",
	});
}

export default Component;
