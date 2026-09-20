import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfm7f3bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfm7f3bln"/>`,
		"fallback": "mynaui:rewind-circle-solid",
	});
}

export default Component;
