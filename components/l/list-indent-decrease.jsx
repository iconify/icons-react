import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvdoydb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvdoydb9i"/>`,
		"fallback": "vadivam:list-indent-decrease",
	});
}

export default Component;
