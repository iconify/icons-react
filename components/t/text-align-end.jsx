import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f37g478bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f37g478bu"/>`,
		"fallback": "vadivam:text-align-end",
	});
}

export default Component;
