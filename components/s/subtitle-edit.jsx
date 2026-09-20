import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjzw4bccr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjzw4bccr"/>`,
		"fallback": "thesvg-color:subtitle-edit",
	});
}

export default Component;
