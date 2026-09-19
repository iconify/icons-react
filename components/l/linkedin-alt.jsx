import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8ytktbsv.css';

const viewBox = {"width":472,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8ytktbsv"/>`,
		"fallback": "ps:linkedin-alt",
	});
}

export default Component;
