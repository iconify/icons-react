import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oddw4b50v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oddw4b50v"/>`,
		"fallback": "reicon:message3-filled",
	});
}

export default Component;
