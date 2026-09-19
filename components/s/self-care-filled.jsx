import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdx3r-bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdx3r-bkw"/>`,
		"fallback": "boxicons:self-care-filled",
	});
}

export default Component;
