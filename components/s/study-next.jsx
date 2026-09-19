import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csv-zmb0e.css';
import '../../css/j/j5ir4rbhy.css';
import '../../css/m/m2mxtz_ws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csv-zmb0e"/><path class="j5ir4rbhy"/><path class="m2mxtz_ws"/>`,
		"fallback": "carbon:study-next",
	});
}

export default Component;
