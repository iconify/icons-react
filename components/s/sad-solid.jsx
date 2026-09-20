import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpr7u8byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpr7u8byr"/>`,
		"fallback": "mynaui:sad-solid",
	});
}

export default Component;
