import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhfq9qt_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhfq9qt_a"/>`,
		"fallback": "iconaut:tally-solid",
	});
}

export default Component;
