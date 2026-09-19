import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh5xrqc4m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh5xrqc4m"/>`,
		"fallback": "f7:person-circle",
	});
}

export default Component;
