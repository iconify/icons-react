import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_sgyj7rs.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_sgyj7rs"/>`,
		"fallback": "dinkie-icons:memo-small",
	});
}

export default Component;
