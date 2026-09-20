import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e84d_obpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e84d_obpw"/>`,
		"fallback": "mynaui:letter-c-circle-solid",
	});
}

export default Component;
