import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd6o0qbzu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd6o0qbzu"/>`,
		"fallback": "bytesize:paperclip",
	});
}

export default Component;
