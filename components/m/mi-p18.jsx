import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddj9ktb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddj9ktb2v"/>`,
		"fallback": "cbi:mi-p18",
	});
}

export default Component;
