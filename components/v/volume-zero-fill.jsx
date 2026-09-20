import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmmki2bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmmki2bsd"/>`,
		"fallback": "mage:volume-zero-fill",
	});
}

export default Component;
