import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olqwrl1db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olqwrl1db"/>`,
		"fallback": "reicon:stack-perspective-filled",
	});
}

export default Component;
