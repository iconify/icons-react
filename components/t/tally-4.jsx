import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9sjz1bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9sjz1bas"/>`,
		"fallback": "vadivam:tally-4",
	});
}

export default Component;
