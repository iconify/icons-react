import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmi277fug.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmi277fug"/>`,
		"fallback": "streamline-pixel:interface-essential-pencil-edit-1",
	});
}

export default Component;
