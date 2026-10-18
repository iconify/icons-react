import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9r3v0beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9r3v0beh"/>`,
		"fallback": "vadivam:tag",
	});
}

export default Component;
