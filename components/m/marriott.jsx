import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khdg-7b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khdg-7b5u"/>`,
		"fallback": "thesvg:marriott",
	});
}

export default Component;
