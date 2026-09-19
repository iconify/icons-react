import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu04n28xe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu04n28xe"/>`,
		"fallback": "cib:skype",
	});
}

export default Component;
