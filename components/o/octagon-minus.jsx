import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjua3biyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjua3biyd"/>`,
		"fallback": "lucide:octagon-minus",
	});
}

export default Component;
