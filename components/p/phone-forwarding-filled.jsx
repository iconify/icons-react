import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-_0twbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-_0twbwi"/>`,
		"fallback": "boxicons:phone-forwarding-filled",
	});
}

export default Component;
