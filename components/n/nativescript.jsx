import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfo45p3ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfo45p3ee"/>`,
		"fallback": "simple-icons:nativescript",
	});
}

export default Component;
