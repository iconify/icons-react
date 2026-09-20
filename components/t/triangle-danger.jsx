import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au31uekiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au31uekiu"/>`,
		"fallback": "mynaui:triangle-danger",
	});
}

export default Component;
