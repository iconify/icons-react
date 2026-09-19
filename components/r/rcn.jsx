import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fot1ehb6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fot1ehb6v"/>`,
		"fallback": "cryptocurrency:rcn",
	});
}

export default Component;
