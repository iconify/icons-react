import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3n7f0bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3n7f0bye"/>`,
		"fallback": "vadivam:waves-horizontal",
	});
}

export default Component;
