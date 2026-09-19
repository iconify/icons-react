import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln-j0jbal.css';

const viewBox = {"width":448,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln-j0jbal"/>`,
		"fallback": "zmdi:time-restore-setting",
	});
}

export default Component;
