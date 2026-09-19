import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phci0g--m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phci0g--m"/>`,
		"fallback": "hugeicons:milestone",
	});
}

export default Component;
