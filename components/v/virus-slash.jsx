import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hetfuzv4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hetfuzv4u"/>`,
		"fallback": "boxicons:virus-slash",
	});
}

export default Component;
