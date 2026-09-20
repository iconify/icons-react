import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb90z3lfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb90z3lfm"/>`,
		"fallback": "ri:user-add-line",
	});
}

export default Component;
